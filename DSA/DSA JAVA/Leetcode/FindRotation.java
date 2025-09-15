public class FindRotation {
    public static void main(String[] args) {
//        int[] arr = {15, 18, 2, 3, 6, 12};
        int[] arr = {0, 1, 2, 3, 4, 5};
        System.out.println(countRotations(arr));
    }

    static int countRotations(int[] arr) {
        int pivot = findPivot(arr);
        return pivot + 1;
    }

    // use this for non duplicates

    static int findPivot(int[] arr) {
        int start = 0;
        int end = arr.length - 1;

        while (start <= end) {
            int mid = start + (end - start) / 2;

            if (mid < end && arr[mid] > arr[mid + 1]) {
                return mid;
            }

            if (mid > start && arr[mid] < arr[mid - 1]) {
                return mid - 1;
            }

            if (arr[mid] <= arr[start]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        return -1;
    }

    // use this for duplicates

    int duplicates(int[] arr) {
        int start = 0;
        int end = arr.length - 1;

        while (start <= end) {
            int mid = start + (end - start) / 2;

            if (mid < end && arr[mid] > arr[mid + 1]) {
                return mid;
            }

            if (mid > start && arr[mid] < arr[mid - 1]) {
                return mid - 1;
            }

            // if elements at middle start end are equal then just skip the duplicates

            if (arr[mid] == arr[start] && arr[mid] == arr[end]) {

                //check id start is pivot

                if (arr[start] == arr[start = 1]) {
                    return start;
                }

                start++;

                if (arr[end] < arr[end - 1]) {
                    return end - 1;
                }
                end--;


            }
        }

        return -1;
    }
}