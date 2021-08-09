const mtr = require("../index");

/* Diagonal difference testing */
test("Test diagonal difference utility on a 2x2 matrix", () => {
    const M = [
        [5, 2],
        [3, 4]
    ];
    expect(M.length).toBeGreaterThan(0);
    expect(mtr.diagonalDiff(M)).toEqual(4);
});

test("Test diagonal difference utility on a 3x3 matrix", () => {
    const M = [
        [5, 2, 5],
        [3, 4, 3],
        [8, 5, 1]
    ];
    const A = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 5, 2]
    ];
    expect(M.length).toBeGreaterThan(0);
    expect(A.length).toBeGreaterThan(0);
    expect(mtr.diagonalDiff(M)).toEqual(7);
    expect(mtr.diagonalDiff(A)).toEqual(7)
});

test("Test diagonal difference utility on a 4x4 matrix", () => {
    const M = [
        [5, 2, 5, 6],
        [3, 4, 3, 9],
        [8, 5, 1, 5],
        [6, 2, 3, 1]
    ];
    expect(M.length).toBeGreaterThan(0);
    expect(mtr.diagonalDiff(M)).toEqual(9);
});

test("Test diagonal difference utility on a 5x5 matrix", () => {
    const M = [
        [5, 2, 5, 6, 3],
        [3, 4, 3, 9, 8],
        [8, 5, 1, 5, 2],
        [6, 2, 3, 1, 4],
        [8, 1, 6, 2, 4]
    ];
    expect(M.length).toBeGreaterThan(0);
    expect(mtr.diagonalDiff(M)).toEqual(8);
});

/* isSquare testing */
test("Test isSquare utility for 2x2 matrix", () => {
    const M = [
        [1, 2],
        [3, 4]
    ];
    expect(M.length).toBeGreaterThan(0);
    expect(mtr.isSquare(M)).toBeTruthy();
});

test("Test isSquare utility for 3x3 matrix", () => {
    const M = [
        [1, 2, 5],
        [3, 4, 2],
        [5, 6, 8]
    ];
    expect(M.length).toBeGreaterThan(0);
    expect(mtr.isSquare(M)).toBeTruthy();
});

test("Test isSquare utility for 4x4 matrix", () => {
    const M = [
        [5, 2, 5, 6],
        [3, 4, 3, 9],
        [8, 5, 1, 5],
        [6, 2, 3, 1]
    ];
    expect(M.length).toBeGreaterThan(0);
    expect(mtr.isSquare(M)).toBeTruthy();
});

test("Test isSquare utility for 5x5 matrix", () => {
    const M = [
        [5, 2, 5, 6, 3],
        [3, 4, 3, 9, 8],
        [8, 5, 1, 5, 2],
        [6, 2, 3, 1, 4],
        [8, 1, 6, 2, 4]
    ];
    expect(M.length).toBeGreaterThan(0);
    expect(mtr.isSquare(M)).toBeTruthy();
});

/* rowReduce() testing */

test("Calculate the reduced row echelon form for a 2x2 matrix", () => {
    const M = [
        [2, 5],
        [3, 6]
    ];
    expect(M.length).toBeGreaterThan(0);
    expect(mtr.rowReduce(M)).toEqual([
        [1, 0],
        [0, 1]
    ]);
});

test("Calculate the reduced row echelon form for a 3x3 matrix", () => {
    const M = [
        [5, 8, 2],
        [3, 5, 3],
        [6, 4, 9]
    ];
    expect(M.length).toBeGreaterThan(0);
    expect(mtr.rowReduce(M)).toEqual([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ]);
});

test("Calcuate the reduced row echelon form for a 3x4 matrix", () => {
    const M = [
        [ 2, 1, -1, 8 ],
        [ -3, -1, 2, -11 ],
        [ -2, 1, 2, -3 ]
    ];
    expect(M.length).toBeGreaterThan(0);
    expect(mtr.rowReduce(M)).toEqual([
        [ 1, 0, 0, 2 ], 
        [ 0, 1, 0, 3 ], 
        [ 0, 0, 1, -1 ]
    ]);
});

test("Calculate the reduced row echelon form for a 4x4 matrix", () => {
    const M = [
        [ 2, 1, -1, 8 ],
        [ -3, -1, 2, -11 ],
        [ -2, 1, 2, -3 ],
        [4, 5, 6, 2]
    ];
    expect(M.length).toBeGreaterThan(0);
    expect(mtr.rowReduce(M)).toEqual([
        [ 1, 0, 0, 0 ], 
        [ 0, 1, 0, 0 ], 
        [ 0, 0, 1, 0 ], 
        [ 0, 0, 0, 1 ]
    ]);
});

test("Calculate the reduced row echelon form for a 5x5 matrix", () => {
    const M = [
        [ 2, 1, -1, 8, 9],
        [ -3, -1, 2, -11, 8],
        [ -2, 1, 2, -3, 2],
        [4, 5, 6, 2, 5],
        [4, 2, 9, 1, 3]
    ];
    expect(M.length).toBeGreaterThan(0);
    expect(mtr.rowReduce(M)).toEqual([
        [ 1, 0, 0, 0, 0 ],
        [ 0, 1, 0, 0, 0 ],
        [ 0, 0, 1, 0, 0 ],
        [ 0, 0, 0, 1, 0 ],
        [ 0, 0, 0, 0, 1 ] 
    ]);
});

/* determinant() tests */

test("Calculate the determinant for a 2x2 matrix", () => {
    const M = [
        [2, 5],
        [3, 6]
    ];
    expect(M.length).toBeGreaterThan(0);
    expect(mtr.det(M)).toEqual(-3);
});

test("Calculate the determinant for a 3x3 matrix", () => {
    const M = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 5, 2]
    ];
    expect(M.length).toBeGreaterThan(0);
    expect(mtr.det(M)).toEqual(3);
});

test("Calculate the determinant for a 4x4 matrix", () => {
    const M = [
        [1, 2, 3, 5],
        [4, 5, 6, 2],
        [7, 5, 2, 5],
        [7, 8, 9, 3]
    ];
    expect(M.length).toBeGreaterThan(0);
    expect(mtr.det(M)).toEqual(12);
});

/* isIndependent(M) checks todo */
test("Determine whether a 2x2 matrix is linearly independent", () => {
    const M = [
        [4, 5],
        [2, 6]
    ];
    const A = [
        [2, 5],
        [3, 6]
    ];
    expect(M.length).toBeGreaterThan(0);
    expect(A.length).toBeGreaterThan(0);
    expect(mtr.isIndependent(M)).toBeTruthy();
    expect(mtr.isIndependent(A)).toBeTruthy();
});

/* isDependent checks todo */
test("Determine whether a 2x2 matrix is linearly dependent", () => {
    const M = [
        [1, 1],
        [1, 1]
    ];
    const A = [
        [5, 3],
        [10, 6]
    ]
    expect(M.length).toBeGreaterThan(0);
    expect(A.length).toBeGreaterThan(0);
    expect(mtr.isDependent(M)).toBeTruthy();
    expect(mtr.isDependent(A)).toBeTruthy();
});
