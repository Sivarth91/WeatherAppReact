import { useEffect, useState } from "react";
import { View } from "react-native";
import axios, { AxiosError } from "axios";
import * as dotenv from "dotenv";

export const SearchBar = () => {
    const [search, setSearch] = useState("");
    const API_KEY = "";

    const handleChange = (event: any) => {
        setSearch(event.target.value);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        fetchWeatherData(search);
    }

    const fetchWeatherData = async (search: string) => {
        console.log(search);
        try {
            const res = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${search}&appid=${API_KEY}`);
            const resData = await res.data;
            const { lon, lat } = resData[0];

            const transformedRes = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
            const tranformedResData = transformedRes.data.toJSON();
            console.log(tranformedResData);

            if (resData.length == 0) {
                throw new Error('City not found');
            }

        } catch (err: any | AxiosError) {
            console.log(err);
        }
    }

    useEffect(() => {

    });

    return (
        <View>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Rechercher" value={search} onChange={handleChange}/>
            </form>
        </View>
    )
}