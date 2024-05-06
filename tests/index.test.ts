import { getMostFrequentSighting } from "../src/index";
import { getLatestFirstSighting } from "../src/index";

describe("testing birds coding game", () => {
    // mock
    let emptyArray = [];
    let zeroValue = [0];
    let negativeValue = [-2];
    let nonIntegerValue = [2.344, 1.1];
    let birdSightings1 = [1, 1, 2, 2, 3];
    let birdSightings2 = [1, 1, 2, 3, 2];
    let birdSightings3 = [4, 1, 2, 2, 5];
    let birdSightings4 = [4, 1, 2, 2, 5, 6, 2];
    let birdSightings5 = [4, 1, 2, 2, 5, 6, 2, 1, 1];
    let birdSightings6 = [2, 2, 1, 1, 3];

    describe("test getMostFrequentSighting()", () => {
        test("empty array should throw an error", () => {
            expect(() => {
                getMostFrequentSighting(emptyArray);
            }).toThrow("insert a non-empty array");
        });
        test("zero value should throw an error", () => {
            expect(() => {
                getMostFrequentSighting(zeroValue);
            }).toThrow("bird type ids must be >= 1");
        });
        test("negative value should throw an error", () => {
            expect(() => {
                getMostFrequentSighting(negativeValue);
            }).toThrow("bird type ids must be >= 1");
        });
        test("non-integer value should throw an error", () => {
            expect(() => {
                getMostFrequentSighting(nonIntegerValue);
            }).toThrow("non-integer bird type ids are not allowed");
        });
        test("array 1 should return 1", () => {
            expect(getMostFrequentSighting(birdSightings1)).toBe(1);
        });
        test("array 2 should return 1", () => {
            expect(getMostFrequentSighting(birdSightings2)).toBe(1);
        });
        test("array 3 should return 2", () => {
            expect(getMostFrequentSighting(birdSightings3)).toBe(2);
        });
        test("array 4 should return 2", () => {
            expect(getMostFrequentSighting(birdSightings4)).toBe(2);
        });
        test("array 5 should return 1", () => {
            expect(getMostFrequentSighting(birdSightings5)).toBe(1);
        });
        test("array 6 should return 1", () => {
            expect(getMostFrequentSighting(birdSightings6)).toBe(1);
        });
    });

    describe("test getLatestFirstSighting()", () => {
        test("empty array should throw an error", () => {
            expect(() => {
                getLatestFirstSighting(emptyArray);
            }).toThrow("insert a non-empty array");
        });
        test("zero value should throw an error", () => {
            expect(() => {
                getMostFrequentSighting(zeroValue);
            }).toThrow("bird type ids must be >= 1");
        });
        test("negative value should throw an error", () => {
            expect(() => {
                getMostFrequentSighting(negativeValue);
            }).toThrow("bird type ids must be >= 1");
        });
        test("non-integer value should throw an error", () => {
            expect(() => {
                getMostFrequentSighting(nonIntegerValue);
            }).toThrow("non-integer bird type ids are not allowed");
        });
        test("array 1 should return 3", () => {
            expect(getLatestFirstSighting(birdSightings1)).toBe(3);
        });
        test("array 2 should return 3", () => {
            expect(getLatestFirstSighting(birdSightings2)).toBe(3);
        });
        test("array 3 should return 5", () => {
            expect(getLatestFirstSighting(birdSightings3)).toBe(5);
        });
        test("array 4 should return 6", () => {
            expect(getLatestFirstSighting(birdSightings4)).toBe(6);
        });
        test("array 5 should return 6", () => {
            expect(getLatestFirstSighting(birdSightings5)).toBe(6);
        });
    });
});
