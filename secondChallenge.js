   //define a function that takes one parameter.
function speedDetector(speed){
 
// inside the function, create two variables: one equal to 70 and another equal to every 5 over 70

    const speedLimit = 70;
    const overSpeed = 5;
    
    //if speed is 70 or less, print ok

    if(speed <= speedLimit){ 
        return "Ok";
    }

    //If the speed is above 70, calculate the number of demerit points.
    /* subtract 70 from the speed and divide the result by 5.
    and round down coz it's one whole point for every 5 km/h above the speed limit).*/

    else { 
        const demerit = Math.floor((speed - speedLimit) / overSpeed);
        //return the number of points.
        if (demerit >= 12){
            return "License suspended";
        }
        else {
            return "Points:", demerit;
        }
    }
}

//example

console.log(speedDetector(30));