let speedLimit = 70;
let kmPoint = 5;

function checkSpeed(speed) {
    if (speed <= speedLimit) {
        return "Good Safe Driving"
    } else {
        let penaltyPoint = Math.floor((speed - speedLimit) / kmPoint)
        if (penaltyPoint < 10) {
            return "Speed Limit Crossed by Penalty Point: " + penaltyPoint
        } else {
            return "License Suspended!"
        }
    }
}

console.log("when speed is 40: ", checkSpeed(40));
console.log("when speed is 70: ", checkSpeed(70));
console.log("when speed is 75: ", checkSpeed(75));
console.log("when speed is 90: ", checkSpeed(97));
console.log("when speed is 120: ", checkSpeed(120));