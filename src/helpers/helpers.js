const normalize = (value, min, max) => (value - min) / (max - min);

const getMaxAndMin = inputData => {
    return {
        max: Math.max(...inputData),
        min: Math.min(...inputData)
    };
};

module.exports = {
    normalize,
    getMaxAndMin
};
