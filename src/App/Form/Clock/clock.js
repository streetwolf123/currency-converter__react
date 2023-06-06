import { useState } from "react"
import { StyledClock } from "./styled";

export const Clock = () => {
    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();

    const [converterTime, setConverterTime] = useState(time)
    const [converterDate, setConverterDate] = useState(date)

    const refreshTime = () => {
        const time = new Date().toLocaleTimeString();
        setConverterTime(time)
    }

    const refreshDate = () => {
        const date = new Date().toLocaleDateString();
        setConverterDate(date)
    }

    setInterval(refreshTime, 1000);

    setInterval(refreshDate);
    
    return (  
            <StyledClock>
                Data: {converterDate}&nbsp;&nbsp;
                Godzina: {converterTime}
            </StyledClock>
    );
}