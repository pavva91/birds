/**
 * determines the id of the most frequently sighted type.
 * If more than 1 type has been spotted that maximum amount,
 * return the smallest of their ids.
 *
 * @param birds {number[]} - the types of birds sighted
 * @returns {number} the lowest type id of the most frequently sighted birds
 */
export function getMostFrequentSighting(birds: number[]): number {
    let sightings = new Map<number, number>();

    if (birds.length == 0) {
        throw "insert a non-empty array";
    }

    birds.forEach((bird) => {
        birdValidation(bird);

        // NOTE: to remove warning on possible undefined value
        // let oldValue = sightings.get(bird);
        // if (oldValue != undefined) {
        // sightings.set(bird, oldValue + 1);
        if (sightings.has(bird)) {
            sightings.set(bird, sightings.get(bird) + 1);
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
            // NOTE: if Map is always iterated in crescent order this control can be removed
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
 * @param birds {number[]} - the types of birds sighted
 * @returns {number} the latest type that was spotted for the first time
 */
export function getLatestFirstSighting(birds: number[]): number {
    let sightings = new Map<number, boolean>();
    let latestFirstSighting = 0;
    if (birds.length == 0) {
        throw "insert a non-empty array";
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

function birdValidation(birdTypeId: number): void {
    if (!Number.isInteger(birdTypeId)) {
        throw "non-integer bird type ids are not allowed";
    }
    if (birdTypeId < 1) {
        throw "bird type ids must be >= 1";
        // throw new Error("bird ids must be >= 1");
    }
}
