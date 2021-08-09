/* Referenced from: https://stackoverflow.com/questions/4492385/convert-simple-array-into-two-dimensional-array-matrix */
function listToMatrix(M, step) {
    let matrix = [];
    for (var i = 0, k = -1; i < M.length; i++) {
        if (i % step === 0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(M[i]);
    }
    return matrix;
}

function isSquare(M, is2D = true) {
    if (typeof M !== 'object') {
        throw new Error(`The input matrix 'M' must be an array type ie [object Array]. Its currently '${typeof M}'`);
    }
    let cells = M.length;
    let cols = cells;
    let square = true;
    
    if (is2D) {
        for (var i = 0; i < cells; i++) {
            cols = M[i].length;
            if (cells !== cols) square = false;
        }
    } else {
        M = listToMatrix(M, Math.sqrt(cells));
        cells = M.length;
        for (var j = 0; j < M.length; j++) {
            cols = M[j].length;
            if (cells !== cols) square = false;
        }
    }
    return square;
}

function diagonalDiff(matrix, is2D = true, debug = false) {
    const length = matrix.length;
    const halved = length % 3 === 0 ? length / 3 : length / 2;
    let square = false;

    if (is2D) {
        square = isSquare(matrix);
        if (!square) throw new Error("The 2D matrix must be square!");
    } else {
        square = isSquare(matrix, false);
        if (!square) throw new Error("The 1D matrix must be square!");
  
    }

    const lib = {
        matrix_type: `${halved}x${halved}`,
        left: {
            list: [],
            sum: 0
        },
        right: {
            list: [],
            sum: 0
        },
        diagonal_diff: 0,
    }

    if (!is2D) {
        if (typeof matrix[0] === 'object') {
            throw new Error("Input array must be 1-dimensional");
        }

        is2D = false;
        let newMatrix = listToMatrix(matrix, halved);
        var len = newMatrix.length;

        for (var i = 0, j = 0, k = len - 1; i < len, j < len, k >= 0; i++, j++, k--) {
            lib.left.list.push(newMatrix[i][j]);
            lib.right.list.push(newMatrix[i][k]);
        }
        
        lib.left.sum = lib.left.list.reduce((a, b) => a + b);
        lib.right.sum = lib.right.list.reduce((a, b) => a + b);
        lib.diagonal_diff = Math.abs(lib.left.sum - lib.right.sum);

    } else {
        if (typeof matrix[0] !== 'object') {
            throw new Error("Invalid matrix argument. Please provide an array data type.");
        }
        for (
            var i = 0, j = 0, k = length - 1;
            i < length, j < length, k >= 0;
            i++, j++, k--
        ) {
            lib.left.list.push(matrix[i][j]);
            lib.right.list.push(matrix[i][k]);
            lib.left.sum = lib.left.list.reduce((a,b) => a + b);
            lib.right.sum = lib.right.list.reduce((a, b) => a + b);
            lib.diagonal_diff = Math.abs(lib.left.sum - lib.right.sum);
        }
    }
    return !debug ? lib.diagonal_diff : lib;
}

/* Referenced from: https://rosettacode.org/wiki/Reduced_row_echelon_form#JavaScript */
function rowReduce(M, square = false) {
    if (M[0].length == undefined) {
        throw new Error(`The parameter 'M' must be a 2D matrix! M[0] is currently ${M[0]}`);
    }

    let step = 0;
    const rows = M.length;
    let cols = M[0].length;

    for (var k = 0; k < M.length; k++) {
        col = M[k].length;
        if (cols !== col) throw new Error("A row has a column with values that are undefined or NaN");
    }

    if (square && isSquare(M)) {
        for (var i = 0; i < rows; i++) {
            cols = M[i].length;
        }
        if (rows !== cols) {
            throw new Error("M is not a square matrix!");
        }
    }

    for (var r = 0; r < rows; r++) {
        if (cols <= step) {
            return;
        }
        let j = r;
        while (M[j][step] === 0) {
            j++;
            if (rows === j) {
                j = r;
                step++;
                if (cols === step) return;
            }
        }

        let temp = M[r];
        M[j] = M[r];
        M[r] = temp;
        let v = M[r][step];

        for (var k = 0; k < cols; k++) {
            M[r][k] /= v;
            M[r][k] == -0 ? M[r][k] = 0 : M[r][k] = M[r][k];
        }

        for (var a = 0; a < rows; a++) {
            if (a === r) continue; 
            v = M[a][step];
            for (var b = 0; b < cols; b++) {
                M[a][b] -= v * M[r][b];
            }
        }
        step++;
    }
    return M;
}

function determinant(M) {
    if (!isSquare(M)) {
        throw new Error("Matrix must be square!");
    }
    const rows = M.length;
    let det = 0;

    if (rows == 2 && M[0].length == 2) {
        det = (M[0][0]*M[1][1]) - (M[0][1]*M[1][0]);
    }
    /* Referenced from https://rosettacode.org/wiki/Determinant_and_permanent#JavaScript */
    function d(A) {
        return A.length === 1 ? (
            A[0][0]
        ) : A[0].reduce(
            (sum, v, i) => sum + v * (-1) ** i * d(
                A.slice(1)
                .map(n => n.filter((_, j) => i !== j))
            ), 0
        );
    }
    det = d(M);
    return det;
}

function isIndependent(M) {
    return determinant(M) !== 0 ? true : false;
}

function isDependent(M) {
    return determinant(M) === 0 ? true : false;
}

module.exports = {
    listToMatrix,
    diagonalDiff,
    rowReduce,
    isSquare,
    determinant,
    isIndependent,
    isDependent
};