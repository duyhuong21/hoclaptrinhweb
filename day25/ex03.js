/*
* book taxi
*
* 41 tran duy hung -> dai hoc back khoa
*
* click "ok"
*
* -> find some drivers (nearest and free)
* */


const user = {
    id: 1,
    name: 'Tran Xuan Banh',
    long: 105.8213,
    lat: 21.0196
}

const findNearestDriver = (curLong, curLat) => {
    const drivers= [
        { id: 1, name: "Nguyen Van A", long: 105.8342, lat: 21.0278, isFree: true },
        { id: 2, name: "Tran Van B", long: 105.8411, lat: 21.0302, isFree: false },
        { id: 3, name: "Le Van C", long: 105.8295, lat: 21.0251, isFree: true },
        { id: 4, name: "Pham Van D", long: 105.8456, lat: 21.0328, isFree: true },
        { id: 5, name: "Hoang Van E", long: 105.8203, lat: 21.0199, isFree: false }
    ]

    const driversFree = drivers
        .filter (driver => driver.isFree === true)
        .map(driver => {
            const distance = Math.abs(driver.long - curLong) + Math.abs(driver.lat - curLat)
            return {
                ...driver,
                distance
            };
        })

    let nearestDriver = driversFree[0];
    for (let i = 1; i < driversFree.length; i++) {
        if (driversFree[i].distance < driversFree.distance) {
            nearestDriver = driversFree[i];
        }
    }
    return nearestDriver;

}
const driver = findNearestDriver(user.long, user.lat);
console.log(driver);



