# matrmath
A library for performing matrix operations.

## Installation
Install the package from [npm]()

```js
npm install matrmath
```

## Usage
Utilize the [functions]() in this library for performing matrix operations:

For example, compute the diagonal difference of a square (n x n) matrix.

```js
const mtr = require("matrmath");

let diff = mtr.diagDiff([
    [2, 5, 3],
    [4, 6, 1],
    [7, 8, 9]
]);

console.log(diff);
// |(2+6+9) - (3+6+7)| = |17-16| = 1
```

Or compute a matrix in reduced row echelon form:

```js
const mtr = require("matrmath");

let reduced = mtr.rowReduce([
    [5, 8, 2],
    [3, 5, 3],
    [6, 4, 9]
]);

console.log(reduced);
// [ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ] ]
```

## Config

### rowReduce(M)

Transform a matrix in-place and return the reduced row-echelon form of a matrix. Row replacement is achieved through [Gaussian Elimination](https://en.wikipedia.org/wiki/Gaussian_elimination#:~:text=In%20mathematics%2C%20Gaussian%20elimination%2C%20also,the%20corresponding%20matrix%20of%20coefficients.).

- `M` - `number[] | string[]` - A 2-dimensional array.
- `square` - `boolean` - Optional boolean parameter to specify if the matrix is square (ie 3x3, 4x4 etc).

### diagDiff(M)
Return the diagonal difference of a [square](https://en.wikipedia.org/wiki/Square_matrix). The diagonal difference is the absolute value of the left diagonal minus the right diagonal in a square matrix.

- `M` - `number[][] | number[]` - A 2-dimensional array, or optionally 1D array.
- `is2D` - `boolean` - Optional boolean parameter to specify if the matrix is 1D instead of 2D.
- `debug` - `boolean` - Optional boolean parameter to output the `lib` object with items used in computations.

### isSquare(M)
Check whether a 2D or 1D matrix is square. That is the number of rows equals the number of columns in a `n x m` layout where n = rows and m = columns and n must equal m.

- `M` - `number[][] | number[]` - A 2D or 1D array, or optionally 1D array.
- `is2D` - `boolean` - Optional boolean parameter to specify if the matrix is 1D instead of 2D.

### det(M)
Calculate the [determinant](https://en.wikipedia.org/wiki/Determinant) of a matrix using [Laplace expansion](https://en.wikipedia.org/wiki/Laplace_expansion).

- `M` - `number[][]` - A 2-dimensional array.


### isIndependent(M)
Calculate whether a square matrix is linearly independent. If the determinant of a matrix is not equal to 0, its linearly independent.

- `M` - `number[][]` - A 2-dimensional array.

### isDependent(M)
Calculate whether a square matrix is linearly dependent. Meaning its determinant equals 0.

- `M` - `number[][]` - A 2-dimensional array.

## Tests
Run the Jest tests with:

```npm run test`


## Todo
[ ] - Add a utility for transforming points in R^n to R^n. In other words, transform a set of points in some space (R2) to points in (R3). Have a initial input matrix and a transformation matrix as parameters to output the points after being multiplied by the transformation matrix.


## Resources
- [Reduced Row Echelon Form - JavaScript](https://rosettacode.org/wiki/Reduced_row_echelon_form#JavaScript) code example by rosettacode.
- [Determinant - JavaScript](https://rosettacode.org/wiki/Determinant_and_permanent#JavaScript)
- [substrack/rref](https://github.com/substack/rref) - library for row reducing based on rosettacode example.