

// format (2022-02-17 13:30:28)
export function fullDateFormat(date) {
    try {
        let resDate = "";
        if (date) {
            const currentDate = new Date(date);
            let hours = currentDate.getHours(),
                minutes = currentDate.getMinutes(),
                secound = currentDate.getSeconds();
            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            secound = secound < 10 ? '0' + secound : secound;
            resDate = currentDate.getFullYear() + "-" + ("0" + (currentDate.getMonth() + 1)).slice(-2) + "-" + ("0" + currentDate.getDate()).slice(-2) + " " + hours + ':' + minutes + ":" + secound;
        }
        return resDate;
    } catch (err) {
        console.log(err)
    }
}
