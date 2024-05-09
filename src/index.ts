export const errorEmptyArray = new Error("insert a non-empty array");
export const errorNonIntegerValue = new TypeError(
  "non-integer bird type ids are not allowed",
);
export const errorNonPositiveValue = new RangeError(
  "bird type ids must be >= 1",
);
export const errorOverflowValue = new RangeError("integer too big");

/**
 * determines the id of the most frequently sighted type.
 * If more than 1 type has been spotted that maximum amount,
 * return the smallest of their ids.
 *
 * @param birds {number[]} - the types of birds sighted
 * @returns {number} the lowest type id of the most frequently sighted birds
 * @throws {Error} If the array is empty
 * @throws {TypeError} If an element in the input array is not integer
 * @throws {RangeError} If the an element in the input array is not >= 1
 */
export function getMostFrequentSighting(birds: number[]): number {
  const sightings = new Map<number, number>();

  if (birds.length === 0) {
    throw errorEmptyArray;
  }

  birds.forEach((bird) => {
    birdValidation(bird);
    if (sightings.has(bird)) {
      sightings.set(bird, sightings.get(bird)! + 1);
    } else {
      sightings.set(bird, 1);
    }
  });

  let maxValue = 0;
  let mostFrequentBird = 0;
  sightings.forEach((value, key) => {
    if (value > maxValue) {
      mostFrequentBird = key;
      maxValue = value;
    } else if (value == maxValue) {
      if (key < mostFrequentBird) {
        mostFrequentBird = key;
        maxValue = value;
      }
    }
  });

  return mostFrequentBird;
}

/**
 * determines the id of the bird type that was
 * spotted for the first time at the latest.
 *
 * @param birds {number[]} - the types of birds sighted
 * @returns {number} the latest type that was spotted for the first time
 * @throws {Error} If the array is empty
 * @throws {TypeError} If an element in the input array is not integer
 * @throws {RangeError} If the an element in the input array is not >= 1
 */
export function getLatestFirstSighting(birds: number[]): number {
  const sightings = new Map<number, boolean>();
  let latestFirstSighting = 0;
  if (birds.length === 0) {
    throw errorEmptyArray;
  }
  birds.forEach((bird) => {
    birdValidation(bird);
    if (!sightings.has(bird)) {
      latestFirstSighting = bird;
      sightings.set(bird, true);
    }
  });
  return latestFirstSighting;
}

/**
 * @throws {TypeError} If the birdTypeId is not integer
 * @throws {RangeError} If the birdTypeId is not >= 1
 * @throws {RangeError} If the birdTypeId is over Number.MAX_SAFE_INTEGER
 */
function birdValidation(birdTypeId: number): void {
  if (!Number.isInteger(birdTypeId)) {
    throw errorNonIntegerValue;
  }
  if (birdTypeId < 1) {
    throw errorNonPositiveValue;
  }
  if (!(birdTypeId <= Number.MAX_SAFE_INTEGER)) {
    throw errorOverflowValue;
  }
}
