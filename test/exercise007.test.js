const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/exercise007");

describe("sumDigits", () => {
    test("returns the sum of the digits", () => {
        expect(sumDigits(364)).toBe(13);
        expect(sumDigits(9)).toBe(9);
        expect(sumDigits(0)).toBe(0);
        expect(sumDigits(82)).toBe(10);
        expect(sumDigits(23641)).toBe(16);
    })

    test("throws if the input is not a positive integer", () => {
        expect(() => { sumDigits("23YoxU"); }).toThrow("n must be a positive integer");
        expect(() => { sumDigits(-12); }).toThrow("n must be a positive integer");
        expect(() => { sumDigits(0.375); }).toThrow("n must be a positive integer");
    })
});

describe("createRange", () => {
    test("returns the correct range", () => {
        expect(createRange(1, 1)).toEqual([1]);
        expect(createRange(1, 4)).toEqual([1, 2, 3, 4]);
        expect(createRange(1, 4, 2)).toEqual([1, 3]);
        expect(createRange(1, 7, 2)).toEqual([1, 3, 5, 7]);
        expect(createRange(9, 20, 5)).toEqual([9, 14, 19]);
    });

    test("throws if any of the inputs are not positive integers", () => {
        expect(() => { createRange(-2, 5, 1); }).toThrow("start must be a positive integer");
        expect(() => { createRange(2, 5.2); }).toThrow("end must be a positive integer");
        expect(() => { createRange(2, 5, -2); }).toThrow("step must be a positive integer");
    });

    test("throws if the end is greater than the start", () => {
        expect(() => { createRange(9, 6); }).toThrow("start must be less than or equal to end");
    });
});

describe("getScreentimeAlertList", () => {
    test("returns array of users exceeding time limit", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 4, facebook: 31, safari: 22 } },
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },

                ]
            },
            {
                username: "joe_screen_addict",
                name: "Joe Bloggs",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 100, whatsApp: 355, facebook: 44, safari: 10 } },
                    { date: "2019-05-02", usage: { mapMyRun: 100, whatsApp: 92, facebook: 35, safari: 16 } },
                    { date: "2019-05-04", usage: { mapMyRun: 62, whatsApp: 89, facebook: 33, safari: 31 } },
                ]
            },
        ];
        expect(getScreentimeAlertList(users, "2019-05-02")).toEqual(["beth_1234", "sam_j_1989", "joe_screen_addict"]);
        expect(getScreentimeAlertList(users, "2019-06-11")).toEqual(["joe_screen_addict"]);
        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234", "joe_screen_addict"]);
        expect(getScreentimeAlertList(users, "2019-12-04")).toEqual([]);
    });
});

describe("hexToRGB", () => {
    test("returns the correct hex code", () => {
        expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
        expect(hexToRGB("#000000")).toBe("rgb(0,0,0)");
        expect(hexToRGB("#4A100B")).toBe("rgb(74,16,11)");
    });

    test("only takes seven digit strings", () => {
        expect(() => { hexToRGB("#1265ABCD"); }).toThrow("hexStr must be seven characters");
    });
})

describe("findWinner", () => {
    test("returns the correct winner", () => {
       const board1 = [
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ];
        expect(findWinner(board1)).toBe("X");    

        const board2 = [
            ["0", "X", null],
            ["X", "0", "0"],
            ["X", null, "0"]
        ];
        expect(findWinner(board2)).toBe("0");  
        
        const board3 = [
            ["0", "X", "X"],
            ["0", "X", "0"],
            ["X", null, "0"]
        ];
        expect(findWinner(board3)).toBe("X");  

        const board4 = [
            ["0", "X", "X"],
            ["0", "0", "0"],
            ["X", null, "0"]
        ];
        expect(findWinner(board4)).toBe("0");  

        const board5 = [
            ["0", "X", "X"],
            ["0", null, "0"],
            ["X", null, "0"]
        ];
        expect(findWinner(board5)).toBe(null);  
    })
})