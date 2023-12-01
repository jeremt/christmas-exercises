function calcDistance(point1, point2) {
    const deltaX = point2.x - point1.x;
    const deltaY = point2.y - point1.y;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

/**
 * Returns the address of the house closest to santa.
 *
 * @param {{x: number; y: number}} target The current position of santa 🎅
 * @param {{x: number; y: number; address: string}[]} houses The position and addresses of all houses 🏠
 * @returns {string}
 */
const closestHouse = (target, houses) => {
    let closestHouse = houses[0];
    for (const house of houses) {
        if (calcDistance(target, house) <= calcDistance(target, closestHouse)) {
            closestHouse = house;
        }
    }
    return closestHouse.address;
};
