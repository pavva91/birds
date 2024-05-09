import { getMostFrequentSighting } from "../src/index";
import { getLatestFirstSighting } from "../src/index";

describe("testing birds coding game", () => {
  // mock
  const emptyArray: number[] = [];
  const zeroValue = [0];
  const negativeValue = [-2];
  const nonIntegerValue = [2.344, 1.1];
  const octalValue = [0o11];
  const exaValue = [0x11];
  const intOverflowValue = [Number.MAX_SAFE_INTEGER + 1];
  const justBelowIntOverflowValue = [Number.MAX_SAFE_INTEGER];
  const birdSightings1 = [1, 1, 2, 2, 3];
  const birdSightings2 = [1, 1, 2, 3, 2];
  const birdSightings3 = [4, 1, 2, 2, 5];
  const birdSightings4 = [4, 1, 2, 2, 5, 6, 2];
  const birdSightings5 = [4, 1, 2, 2, 5, 6, 2, 1, 1];
  const birdSightings6 = [2, 2, 1, 1, 3];

  // expected errors
  const errorEmptyArray = new Error("insert a non-empty array");
  const errorNonIntegerValue = new TypeError(
    "non-integer bird type ids are not allowed",
  );
  const errorNonPositiveValue = new RangeError("bird type ids must be >= 1");
  const errorOverflowValue = new RangeError("integer too big");

  describe("test getMostFrequentSighting()", () => {
    test("empty array should throw an error", () => {
      expect(() => {
        getMostFrequentSighting(emptyArray);
      }).toThrow(errorEmptyArray);
    });
    test("zero value should throw an error", () => {
      expect(() => {
        getMostFrequentSighting(zeroValue);
      }).toThrow(errorNonPositiveValue);
    });
    test("negative value should throw an error", () => {
      expect(() => {
        getMostFrequentSighting(negativeValue);
      }).toThrow(errorNonPositiveValue);
    });
    test("non-integer value should throw an error", () => {
      expect(() => {
        getMostFrequentSighting(nonIntegerValue);
      }).toThrow(errorNonIntegerValue);
    });
    test("octal value", () => {
      expect(getMostFrequentSighting(octalValue)).toBe(9);
    });
    test("exa value", () => {
      expect(getMostFrequentSighting(exaValue)).toBe(17);
    });
    test("integer overflow value", () => {
      expect(() => {
        getMostFrequentSighting(intOverflowValue);
      }).toThrow(errorOverflowValue);
    });
    test("just below integer overflow value", () => {
      expect(getMostFrequentSighting(justBelowIntOverflowValue)).toBe(
        9007199254740991,
      );
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
      }).toThrow(errorEmptyArray);
    });
    test("zero value should throw an error", () => {
      expect(() => {
        getLatestFirstSighting(zeroValue);
      }).toThrow(errorNonPositiveValue);
    });
    test("negative value should throw an error", () => {
      expect(() => {
        getLatestFirstSighting(negativeValue);
      }).toThrow(errorNonPositiveValue);
    });
    test("non-integer value should throw an error", () => {
      expect(() => {
        getLatestFirstSighting(nonIntegerValue);
      }).toThrow(errorNonIntegerValue);
    });
    test("octal value", () => {
      expect(getLatestFirstSighting(octalValue)).toBe(9);
    });
    test("exa value", () => {
      expect(getLatestFirstSighting(exaValue)).toBe(17);
    });
    test("integer overflow value", () => {
      expect(() => {
        getLatestFirstSighting(intOverflowValue);
      }).toThrow(errorOverflowValue);
    });
    test("just below integer overflow value", () => {
      expect(getLatestFirstSighting(justBelowIntOverflowValue)).toBe(
        9007199254740991,
      );
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
