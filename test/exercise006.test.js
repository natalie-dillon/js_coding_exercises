const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
    test("returns the sum of any numbers which are a multiple of 3 or 5", () => {
        expect(sumMultiples([5, 3, 7, 8, 1, 25])).toBe(33);
     expect(sumMultiples([9, 13, 10, 8, 6, 10])).toBe(35);
        expect(sumMultiples([0, 4, -5, 3, 77, 19, 20])).toBe(18);
    });

    test("if there are no multiples of 3 or 5 in the array, returns 0", () => {
        expect(sumMultiples([7, 13, 17, 32])).toBe(0);
    });

    test("if the array is empty returns 0", () => {
        expect(sumMultiples([])).toBe(0);
    });
});

describe("isValidDNA", () => {
    test("returns true if the string contains only C G T or A", () => {
        expect(isValidDNA("GTCA")).toBe(true);
        expect(isValidDNA("ACTG")).toBe(true);
        expect(isValidDNA("AGGc")).toBe(true);
    })

     test("returns false if the string contains any other characters", () => {
        expect(isValidDNA("GRTCA")).toBe(false);
        expect(isValidDNA("AC TG")).toBe(false);
        expect(isValidDNA("AG!Gc")).toBe(false);
     })

     test("returns false if the string is empty", () => {
        expect(isValidDNA("")).toBe(false);
     })
});

describe("getComplementaryDNA", () => {
    test("returns complementary string", () => {
        expect(getComplementaryDNA("TACG")).toBe("ATGC");
        expect(getComplementaryDNA("ACTGGCA")).toBe("TGACCGT");
        expect(getComplementaryDNA("TG")).toBe("AC");
    })

    test("throws if the string is not valid DNA", () => {
        expect(() => { getComplementaryDNA("GUCA"); }).toThrow("str must be valid DNA");
    })
})

describe("isItPrime", () => {
    test("returns true for prime numbers", () => {
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(3)).toBe(true);
        expect(isItPrime(5)).toBe(true);
        expect(isItPrime(13)).toBe(true);
        expect(isItPrime(467)).toBe(true);
        expect(isItPrime(223)).toBe(true);
    })

    test("returns false for non prime numbers or other inputs", () => {
        expect(isItPrime("Hello")).toBe(false);
        expect(isItPrime(1)).toBe(false);
        expect(isItPrime(0)).toBe(false);
        expect(isItPrime(15)).toBe(false);
        expect(isItPrime(-13)).toBe(false);
        expect(isItPrime(0.25)).toBe(false);
    })
})

describe("createMatrix", () => {
    test("returns the correct matrix", () => {
        const emptyMatrix = [];
        expect(createMatrix(0, "zero")).toEqual(emptyMatrix);

        const matrix1 = [["uno"]];
        expect(createMatrix(1, "uno")).toEqual(matrix1);

        const matrix2 = [["due", "due"], ["due", "due"]];
        expect(createMatrix(2, "due")).toEqual(matrix2);

        const matrix3 = [["tre", "tre", "tre"], ["tre", "tre", "tre"], ["tre", "tre", "tre"]];
        expect(createMatrix(3, "tre")).toEqual(matrix3);
    })

     test("throws if n is not a positive integer", () => {
         expect(() => createMatrix(-4, "meno quattro")).toThrow("n must be a positive integer");
         expect(() => createMatrix(2.5, "due e mezzo")).toThrow("n must be a positive integer");
     })
})

describe("areWeCovered", () => {
    test("returns true for three or more staff", () => {
        const staff = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Susanna", rota: ["Thursday", "Sunday", "Tuesday", "Wednesday"] },
        ];
        expect(areWeCovered(staff, "Tuesday")).toBe(true);
        expect(areWeCovered(staff, "Sunday")).toBe(false);
    })   
})