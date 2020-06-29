import * as myModule from './mock-methode2';

export const sum = function (a, b) {
    return a + b + myModule.bonus();
}

export const bonus = function () {
    return 5;
}