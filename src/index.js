
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined) return [];
    return matrix.reduce((result, elem, index) => {
        (index % 2 === 0) ? result.push(...elem) : result.push(...elem.reverse());
        return result;
    }, []);
}
