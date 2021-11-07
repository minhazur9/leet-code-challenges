class SpecialIntFinder {
    public int findSpecialInteger(int[] arr) {
        final int SIZE = arr.length;
        int counter = 0;
        for (int i = 0; i < SIZE; i++) {
            if (i > 0 && arr[i - 1] != arr[i])
                counter = 1;
            else
                counter++;
            if (counter > SIZE / 4)
                return arr[i];
        }
        return -1;
    }

    public static void main(String[] args) {
        long startTime = System.nanoTime();
        int[] arr = { 0, 0, 2, 2, 2, 4, 4, 4, 6, 6, 10, 10, 10, 10, 10, 12, 14, 16, 16 };
        SpecialIntFinder specialIntFinder = new SpecialIntFinder();
        System.out.println(specialIntFinder.findSpecialInteger(arr));
        long endTime = System.nanoTime();
        double totalTime = (double) (endTime - startTime) / 1000000;
        System.out.println(totalTime + " milliseconds");
    }
}