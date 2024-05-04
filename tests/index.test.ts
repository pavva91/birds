import { getMostFrequentSighting } from "../src/index";
import { getLatestFirstSighting } from "../src/index";

describe("testing index file", () => {
    let exampleBirdSightings = [1, 1, 2, 2, 3];
    describe("testing getMostFrequentSighting", () => {
        test("example array should return 1", () => {
            expect(getMostFrequentSighting(exampleBirdSightings)).toBe(1);
        });
        test("another array should return 2", () => {
            let anotherBirdSightings = [4, 1, 2, 2, 3];
            expect(getMostFrequentSighting(anotherBirdSightings)).toBe(2);
        });
    });
    describe("testing getLatestFirstSighting", () => {
        test("example array should return 3", () => {
            expect(getLatestFirstSighting(exampleBirdSightings)).toBe(3);
        });
    });
});
