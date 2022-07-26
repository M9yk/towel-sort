module.exports = function towelSort(matrix) {
    let arr = [];
    if (!matrix) return arr;
    for (let item in matrix) {
        if (item % 2 === 0) {
            arr = arr.concat(matrix[item]);
        } else {
            arr = arr.concat(matrix[item].reverse());
        }
    }
    return arr;
};
