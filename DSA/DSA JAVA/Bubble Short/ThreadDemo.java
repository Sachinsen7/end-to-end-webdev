class MyThread implements Runnable {

    Thread t;

    MyThread() {
        t = new Thread(this, "Demo Thread");
        System.out.println("Child Thread: " + t);
        t.start(); // start the thread
    }

    // This is the entry point for the second thread
    public void run() {
        try {
            for (int j = 4; j > 0; j--) {
                System.out.println("Child Thread: " + j);
                Thread.sleep(500);
            }
        } catch (InterruptedException e) {
            System.out.println("Child Interrupted");
        }
        System.out.println("Exiting child thread");
    }
}

class ThreadDemo {
    public static void main(String args[]) {
        // creating a new thread
        new MyThread();

        try {
            for (int j = 4; j > 0; j--) {
                System.out.println("Main Thread: " + j);
                Thread.sleep(1000);
            }
        } catch (InterruptedException e) {
            System.out.println("Main Thread Interrupted");
        }
        System.out.println("Main Thread Exiting");
    }
}