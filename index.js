const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(integer) {
    return function(fare) {
        return fare * integer;
    }
}

const fareDoubler = createFareMultiplier(2);
const doubledFare = fareDoubler();

const fareTripler = createFareMultiplier(3);
const tripledFare = fareTripler();

const selectDifferentDrivers = function(drivers, returnDriversFunction) {
    return returnDriversFunction(drivers);
}