// Helper functions
exports.calculateAverage = (scores) => {
    if(!scores.length) return 0;
    return scores.reduce((a,b) => a+b, 0) / scores.length;
};
