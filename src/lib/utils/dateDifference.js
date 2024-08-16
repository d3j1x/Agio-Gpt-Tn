// @ts-nocheck
// src/lib/utils/dateDifference.js
export function calculateDateDifference(savedDate) {
    const savedDateObj = new Date(savedDate);
    const todayDate = new Date();
    const differenceInMillis = todayDate - savedDateObj;
    const differenceInDays = Math.floor(differenceInMillis / (1000 * 60 * 60 * 24));
    
    return differenceInDays;
}
