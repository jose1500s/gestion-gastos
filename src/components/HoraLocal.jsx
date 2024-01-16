import { useState, useEffect } from "react";
const MostrarHoraLocal = () => {
    const [time, setTime] = useState(mostrarHoraLocal());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(mostrarHoraLocal());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []); 

    return (
        <span className="text-white text-2xl max-[640px]:text-base  font-semibold">
            {time}
        </span>
    );
}

const mostrarHoraLocal = () => {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridiem = hours < 12 ? "AM" : "PM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + " " + meridiem;
}

export default MostrarHoraLocal;