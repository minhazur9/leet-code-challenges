import java.util.ArrayList;
import java.util.Arrays;

class LargeGroupList {
    public ArrayList<int[]> largeGroupPositions(String s) {
        final ArrayList<int[]> SOLUTION = new ArrayList<int[]>();
        int start = 0;
        int end = 0;
        char charGroup = s.charAt(0);
        for (int i = 0; i < s.length(); i++) {
            if (charGroup != s.charAt(i)) {
                end = i - 1;
                if (end - start >= 2) {
                    final int[] POSITIONS = { start, end };
                    SOLUTION.add(POSITIONS);
                }
                start = i;
                charGroup = s.charAt(i);
            }
        }
        end = s.length() - 1;
        if (end - start >= 2) {
            final int[] POSITIONS = { start, end };
            SOLUTION.add(POSITIONS);
        }
        return SOLUTION;
    }

    public void printSolution(ArrayList<int[]> solution) {
        String result = "[";
        for (int[] group : solution) {
            result += Arrays.toString(group);
        }
        result += "]";
        System.out.println(result);
    }

    public static void main(String[] args) {
        long startTime = System.nanoTime();
        LargeGroupList largeGroupList = new LargeGroupList();
        final ArrayList<int[]> SOLUTION = largeGroupList.largeGroupPositions("abcdddeeeeaabbbcd");
        largeGroupList.printSolution(SOLUTION);
        long endTime = System.nanoTime();
        double totalTime = (double) (endTime - startTime) / 1000000;
        System.out.println(totalTime + " milliseconds");
    }
}