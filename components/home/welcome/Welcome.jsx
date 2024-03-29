import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	FlatList,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import styles from "./welcome.style";
import { icons, SIZES } from "@/constants";

const jobTypes = ["Full-Time", "Part-Time", "Contractor"];

export default function Welcome({ search, setSearch, handleClick }) {
	const router = useRouter();
	const [activeJobType, setActiveJobType] = useState("Full-time");
	console.log(search);
	return (
		<View>
			<View style={styles.container}>
				<Text>Hello, Rammah</Text>
				<Text style={styles.welcomeMessage}>Find your perfect job</Text>
			</View>
			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper}>
					<TextInput
						style={styles.searchInput}
						value={search}
						onChangeText={(text) => setSearch(text)}
						placeholder="What are you looking for?"
					/>
				</View>
				<TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
					<Image
						source={icons.search}
						resizeMode="contain"
						style={styles.searchBtnImage}
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.tabsContainer}>
				<FlatList
					data={jobTypes}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={styles.tab(activeJobType, item)}
							onPress={() => {
								setActiveJobType(item), router.push(`/search/${item}`);
							}}>
							<Text style={styles.tabText(activeJobType, item)}>{item}</Text>
						</TouchableOpacity>
					)}
					keyExtractor={(item) => item}
					contentContainerStyle={{ columnGap: SIZES.small }}
					horizontal
					showsHorizontalScrollIndicator={false}
				/>
			</View>
		</View>
	);
}
