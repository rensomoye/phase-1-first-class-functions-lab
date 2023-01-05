const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers(array){
    return array.slice(0, 2);
}

function returnLastTwoDrivers(array){
    return array.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (integer){
    return function(x) {
        return x * integer
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnFirstORLast) {
    return returnFirstORLast(drivers)
}