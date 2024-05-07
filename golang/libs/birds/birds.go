package birds

import "errors"

// determines the id of the most frequently sighted type.
// If more than 1 type has been spotted that maximum amount,
// return the smallest of their ids.
// the parameter is birds []int - the types of birds sighted
// returns the lowest type id of the most frequently sighted birds
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

// determines the id of the bird type that was
// spotted for the first time at the latest.
// the parameter is birds []int - the types of birds sighted
// returns the latest type that was spotted for the first time
func GetLatestFirstSighting(birds []int) (int, error) {
	sightings := make(map[int]bool)
	latestFirstSighting := 0

	if len(birds) == 0 {
		return -1, errors.New("insert a non-empty array")
	}

	for _, bird := range birds {
		if bird <= 0 {
			return -1, errors.New("bird type ids must be >= 1")
		}
		if !sightings[bird] {
			latestFirstSighting = bird
			sightings[bird] = true
		}
	}

	return latestFirstSighting, nil
}
