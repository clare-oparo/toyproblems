function speedDetector(speed){

    const speedLimit = 70;
    const overSpeed = 5;

    if(speed <= speedLimit){
        return "Ok";
    }
    else {
        const demerit = Math.floor((speed - speedLimit) / overSpeed);
        if (demerit >= 12){
            return "License suspended";
        }
        else {
            return "Points:", demerit;
        }
    }
}

console.log(speedDetector(30));