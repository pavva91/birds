import java.util.HashMap;
import java.util.Map;

public class Birds {
    public static void main(String[] args) {
        // int[] inputArray = { 1, 1, 2, 2, 3 };
        int[] inputArray = { 1, 1, 2, 2, 3 };
        int value = getMostFrequentSighting(inputArray);
        System.out.println(value);
    }

    public static int getMostFrequentSighting(int[] birds) {
        Map<Integer, Integer> sightings = new HashMap<>();
        if (birds.length == 0) {
            throw new IllegalArgumentException("insert a non-empty array");
        }

        for (int bird : birds) {
            if (bird < 1) {
                throw new IllegalArgumentException("bird type ids must be >= 1");
            }
            if (sightings.containsKey(bird)) {
                int oldValue = sightings.get(bird);
                sightings.put(bird, oldValue + 1);
            } else {
                sightings.put(bird, 1);
            }

        }

        int maxValue = 0;
        int mostFrequentBird = 0;

        for (Integer key : sightings.keySet()) {
            Integer value = sightings.get(key);
            if (value > maxValue) {
                mostFrequentBird = key;
                maxValue = value;
            } else if (value == maxValue) {
                if (key < mostFrequentBird) {
                    mostFrequentBird = key;
                    maxValue = value;
                }
            }
        }

        return mostFrequentBird;
    }

    public static int getLatestFistSighting(int[] birds) {
        Map<Integer, Boolean> sightings = new HashMap<>();
        int latestFistSighting = 0;
        if (birds.length == 0) {
            throw new IllegalArgumentException("insert a non-empty array");
        }

        for (int bird : birds) {
            if (bird < 1) {
                throw new IllegalArgumentException("bird type ids must be >= 1");
            }
            if (!sightings.containsKey(bird)) {
                latestFistSighting = bird;
                sightings.put(bird, true);
            }
        }

        return latestFistSighting;
    }

}
