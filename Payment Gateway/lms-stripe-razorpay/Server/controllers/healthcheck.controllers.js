import { getMongoDBConnectionStatus } from '../config/connection.js';

export function healthcheck(req, res) {
    try {
        const dbStatus = getMongoDBConnectionStatus();

        const healthStatus = {
            status: 'OK',
            message: 'Server is healthy',
            timestamp: new Date().toISOString(),
            serives: {
                database: {
                    status: dbStatus.isConnected ? 'connected' : 'disconnected',
                    details: {
                        ...dbStatus,
                        readyState: getReadyStateText(dbStatus.readyState),
                    },
                },
                server: {
                    status: 'running',
                    uptime: process.uptime(),
                    memoryUsage: process.memoryUsage(),
                    cpuUsage: process.cpuUsage(),
                    nodeVersion: process.version,
                    platform: process.platform,
                },
            },
        };

        const httpStatus =
            healthStatus.serives.database.status === 'connected' ? 200 : 503;

        res.status(httpStatus).json(healthStatus);
    } catch (error) {
        console.error('Healthcheck error:', error);
        res.status(500).json({
            status: 'ERROR',
            timestamp: new Date().toISOString(),
            message: 'Healthcheck failed',
            error: error.message,
        });
    }
}

//utility method
function getReadyStateText(state) {
    switch (state) {
        case 0:
            return 'disconnected';
        case 1:
            return 'connected';
        case 2:
            return 'connecting';
        case 3:
            return 'disconnecting';
        default:
            return 'unknown';
    }
}
