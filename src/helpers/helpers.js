const normalize = (value, min, max) => (value - min) / (max - min);

const getMaxAndMin = inputData => {
    return {
        max: Math.max(...inputData),
        min: Math.min(...inputData)
    };
};

const sanitizeStr = str => {
    return str.replace(/[^\w\s.!?]/g, '');
};


module.exports = {
    normalize,
    getMaxAndMin,
    sanitizeStr
};
