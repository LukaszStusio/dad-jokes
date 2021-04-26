// named export
export function randomItemFromArray(array, not) {
    const item = array[Math.floor(Math.random() * array.length)];
    if(item === not) {
        console.log('Ups, we\'ve just used that so look again.')
        return randomItemFromArray(array, not);
    }
    return item;
}