import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./screenheader.style";

export default function ScreenHeaderBtn({
	iconUrl,
	dimension,
	handlePress,
}: {
	iconUrl: ImageSourcePropType;
	dimension: string;
	handlePress: () => void;
}) {
	return (
		<TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
			<Image
				source={iconUrl}
				resizeMode="contain"
				style={styles.btnImg(dimension)}
			/>
		</TouchableOpacity>
	);
}
