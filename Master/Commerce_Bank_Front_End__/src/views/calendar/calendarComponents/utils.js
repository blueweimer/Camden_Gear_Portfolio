import {DAYS, MONTHS} from '../calendarComponents/conts';

export const range = (end) => {
const {result} = Array.from({length: end}).reduce(({result, current}) => ({
    result: [...result, current],
    current: current + 1
}), {result: [], current: 1})

return result;
};

export const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
};

export const getSortedDays = ( month, year) => {
const dayIndex = new Date(year, month, 1).getDay()
return [...DAYS.slice(dayIndex), ...DAYS.slice(0,dayIndex)];
};

export const getDateObj = (day, month, year) => {
return new Date(year, month, day);
};

export const areDatesTheSame = (first, second) => {
return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
    );
};

export const getAdditionalDailyBalance = (first, second) => {
if(
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
    ){
        const out = localStorage.getItem("dailyBalance");
        return "Daily Balance: " + out;
    };
};

export const getAdditionalOverUnder = (first, second) => {
if(
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
    ){
        const out = localStorage.getItem("overUnder");
        return "Over Under: " + out;
    };
};






