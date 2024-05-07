package birds

import "errors"

func GetMostFrequentSighting(birds []int) (int, error) {
	sightings := make(map[int]int)

	if len(birds) == 0 {
		return -1, errors.New("insert a non-empty array")
	}

	for _, bird := range birds {
		if bird <= 0 {
			return -1, errors.New("bird type ids must be >= 1")
		}
		sightings[bird]++
	}

	maxValue := 0
	mostFrequentBird := 0

	for k, v := range sightings {
		if v > maxValue {
			mostFrequentBird = k
			maxValue = v
		} else if v == maxValue {
			// NOTE: in go this part is needed, test with array 6 will fail
			if k < mostFrequentBird {
				mostFrequentBird = k
				maxValue = v
			}
		}
	}

	return mostFrequentBird, nil
}

// func GetLatestFirstSighting(birds []int) (int, error)
