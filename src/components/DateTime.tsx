import {Text, View} from "react-native";
import {useEffect, useState} from "react";

export const DateTime = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (time: number) => {
        return ("0" + time).slice(-2);
    };

    let hours = formatTime(currentTime.getHours());
    let minutes = formatTime(currentTime.getMinutes());

    return (
        <View>
            <Text>{hours}:{minutes}</Text>
        </View>
    )
}