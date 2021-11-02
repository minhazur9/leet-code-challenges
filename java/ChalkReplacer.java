class ChalkReplacer {
    public int whoReplacesIt(int[] chalk, int k) {
        final int MAX_STUDENTS = chalk.length;
        int index = -1;
        while (k >= 0) {
            index++;
            if (index >= MAX_STUDENTS)
                index = 0;
            k -= chalk[index];
        }
        return index;
    }

    public static void main(String[] args) {
        long startTime = System.nanoTime();
        ChalkReplacer chalkReplacer = new ChalkReplacer();
        int[] chalk = { 3, 4, 1, 2 };
        System.out.println(chalkReplacer.whoReplacesIt(chalk, 25));
        long endTime = System.nanoTime();
        double totalTime = (double) (endTime - startTime) / 1000000;
        System.out.println(totalTime + " milliseconds");
    }
}
