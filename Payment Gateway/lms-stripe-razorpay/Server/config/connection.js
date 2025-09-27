import mongoose from 'mongoose';

const MAX_RETRIES = 3;
const RETRY_INTERVAL = 5000; // in milliseconds

class MongoDBConnection {
    constructor() {
        this.retryCount = 0;
        this.isConnected = false;

        // configure mongoose to use strict query mode
        mongoose.set('strictQuery', true);

        mongoose.connection.on('connected', () => {
            console.log('MongoDB connected successfully');
            this.isConnected = true;
            this.retryCount = 0;
        });

        mongoose.connection.on('error', () => {
            console.log('MongoDB connection error');
            this.isConnected = false;
        });

        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB disconnected');
            this.handleDisconnection();
        });

        process.on('SIGTERM', this.handleTermination.bind(this)); // signal
    }

    async connect() {
        try {
            if (!process.env.MONGODB_URL) {
                throw new Error(
                    'MONGODB_URL is not defined in environment variables'
                );
            }

            const connectionOptions = {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                maxPoolSize: 10, // for paid it allows more
                serverSelectionTimeoutMS: 5000, // keep trying to send operations for 5 seconds
                socketTimeoutMS: 45000, // close sockets after 45 seconds of inactivity
                family: 4, // use IPv4, skip trying IPv6
            };

            if (process.env.NODE_ENV === 'development') {
                mongoose.set('debug', true);
            }

            await mongoose.connect(process.env.MONGODB_URL, connectionOptions);
            this.retryCount = 0;
        } catch (error) {
            console.error('MongoDB connection failed:', error.message);
            await this.handleConnectionError();
        }
    }

    async handleConnectionError() {
        if (this.retryCount < MAX_RETRIES) {
            this.retryCount++;
            console.log(
                `Retrying MongoDB connection (${this.retryCount}/${MAX_RETRIES})...`
            );

            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve;
                }, RETRY_INTERVAL)
            );
            return this.connect();
        } else {
            console.error('Max retries reached. Could not connect to MongoDB.');
        }
    }

    async handleDisconnection() {
        if (!this.isConnected) {
            console.log('Attempting to reconnect to MongoDB...');
            return this.connect();
        }
    }

    async handleTermination() {
        try {
            await mongoose.connection.close();
            console.log(
                'MongoDB connection closed due to application termination'
            );
            process.exit(0);
        } catch (error) {
            console.error('Error during MongoDB disconnection:', error.message);
            process.exit(1);
        }
    }

    getConnection() {
        return {
            isConnected: this.isConnected,
            readyState: mongoose.connection.readyState,
            readyState: mongoose.connection.host,
            port: mongoose.connection.port,
            name: mongoose.connection.name,
        };
    }
}

// create singleton instance

const mongoDBConnectionInstance = new MongoDBConnection();

export default mongoDBConnectionInstance.connect.bind(
    mongoDBConnectionInstance
);
export const getMongoDBConnectionStatus =
    mongoDBConnectionInstance.getConnection.bind(mongoDBConnectionInstance);
