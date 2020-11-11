
export function convertUnixTimeToDate(unixUtc: number): Date {
    return new Date(unixUtc * 1000);
}
