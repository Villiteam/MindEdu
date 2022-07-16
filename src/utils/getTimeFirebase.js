
export const getTimeFirebase = (seconds, nanoseconds) => {
    const timeFirebase = new Date(seconds * 1000 + nanoseconds / 1000000)

    const day = timeFirebase.getDate()
    const month = timeFirebase.getMonth()
    const year = timeFirebase.getFullYear()
    var minutes = timeFirebase.getMinutes();
    var hour = timeFirebase.getHours();

    const time = `${day}/${month}/${year}  ${hour}:${minutes < 10 ? `0${minutes}` : minutes}`

    return ({ time, timeFirebase: timeFirebase.getTime() });
}