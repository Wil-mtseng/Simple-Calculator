function addition(...nums) {
    sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
};

function multiplication(...nums) {
    multiplication = 1;
    for (i = 0; i < nums.length; i++) {
        multiplication *= nums[i];
    }
    return multiplication;
};
module.exports = {
    addition,
    multiplication

};