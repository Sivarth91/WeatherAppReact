import { StyleSheet, View } from "react-native";
import { DateTime } from "../components/DateTime";
import {SearchBar} from "../components/SearchBar";

export default function Home() {
    return (
        <View>
            <SearchBar ></SearchBar>
            <DateTime></DateTime>
        </View>
    )
}

const styles = StyleSheet.create({
    bg: {
        width: 720,
        height: 1600,
    },
});