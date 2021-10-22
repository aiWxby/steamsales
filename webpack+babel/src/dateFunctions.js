export const formatDate = function(date = new Date(), format) {
    if (format === "fromObject") {
        let months = date.getMonth() + 1;
        let days = date.getDate();
        let years = date.getFullYear();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        return days + "." + months + "." + years + " " + hours + ":" + minutes + ":" + seconds;
    } else if (format === "fromUnix") {
        // * W3Schools - Unix to Date
        let days = Math.round(date / (1000 * 60 * 60 * 24));
        let hours = Math.round((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.round((date % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.round((date % (1000 * 60)) / 1000);
        return `${days} gün, ${hours} saat, ${minutes} dakika, ${seconds} saniye kaldı.`; 
    }
}

const identifySeason = function(seasonName, year = new Date().getFullYear()){
    switch (seasonName) {
        case "Nextfest":
            return `10/1/${year} 20:00`;
            break;
        case "OpenWorld":
            return `5/27/${year} 20:00`;
            break;
        case "Halloween":
            return `10/28/${year} 20:00`;
            break;
        case "Autumn":
            return `11/24/${year} 20:00`;
            break;
        case "Winter":
            return `12/24/${year} 20:00`;
            break;
        case "Summer":
            return `6/22/${year} 20:00`;
            break;
    }
}

export const getSeasonDate = function(seasonName, format = "object"){
    let date = new Date(identifySeason(seasonName));
    if (format === "object") {
        // ! Object olarak dönüş yapacak.
        return date;
    }
    else if (format === "string") {
        // ! String olarak dönüş yapacak.
        return formatDate(date, "fromObject");
    };
}

const getDifference = function(date, format){
    let difference = date.getTime() - new Date().getTime();
    if (format === "object") {
        return difference;
    } else if ("string"){
        return formatDate(difference, "fromUnix");
    }
}

export const getUnixStamps = function(dateObj){
    let date = getDifference(dateObj, "object");
    const stamps = {
        days: Math.round(date / (1000 * 60 * 60 * 24)),
        hours: Math.round((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.round((date % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.round((date % (1000 * 60)) / 1000)
    }
    return stamps;
}

export const isSaleOnline = function(saleName){
    let stamps = getUnixStamps(getSeasonDate(saleName));
    return (stamps.days === 0 && stamps.hours === 0 && stamps.minutes === 0 && stamps.seconds === 0) ? true : false;
}