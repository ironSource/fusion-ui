export function getUniqueNumber(): number {
    const randomNumber = Math.random();
    const date = new Date();
    return Math.floor(date.getTime() * randomNumber * 10000);
}
