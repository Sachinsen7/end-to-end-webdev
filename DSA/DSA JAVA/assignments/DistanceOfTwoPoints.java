public class DistanceOfTwoPoints {
    public static double Distance(double lat1, double lat2, double long1, double long2){
        final int R = 6371;
        double latDistance = Math.toRadians(lat2 - lat1);
        double longDistance = Math.toRadians(long2 - long1);

        double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2) + Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2)) * Math.sin(longDistance / 2) * Math.sin(longDistance / 2);

        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        double distance = R * c;

        return distance;
    }

    public static void main(String[] args) {

        double lat1 = 28.6139;  // Delhi latitude
        double long1 = 77.2090; // Delhi longitude
        double lat2 = 19.0760;  // Mumbai latitude
        double long2 = 72.8777; // Mumbai longitude

        double result = Distance(lat1, lat2, long1, long2);
        System.out.println("Distance between two points " + result + "km");
    }
}
