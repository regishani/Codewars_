function calculateCost(quantity, price) {
    var sets = Math.floor(quantity / 3);
    var totalCost = (sets * 2 * price) + (quantity % 3 * price);
    return totalCost;
}

console.log(calculateCost(9, 0.5));
git