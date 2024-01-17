import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { SIZES } from "@/constants";

import styles from "./tabs.style";

const TabButton = ({ name, activeTab, onHandleSearch }) => {
	return (
		<TouchableOpacity
			style={styles.btn(name, activeTab)}
			onPress={onHandleSearch}>
			<Text style={styles.btnText(name, activeTab)}>{name}</Text>
		</TouchableOpacity>
	);
};

export default function Tabs({ tabs, activeTab, setActiveTab }) {
	return (
		<View style={styles.container}>
			<FlatList
				data={tabs}
				renderItem={({ item }) => (
					<TabButton
						name={item}
						activeTab={activeTab}
						onHandleSearch={() => setActiveTab(item)}
					/>
				)}
				horizontal
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item) => item}
				contentContainerStyle={{ columnGap: SIZES.small / 2 }}
			/>
		</View>
	);
}
