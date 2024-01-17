import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import { icons } from "@/constants";
import styles from "./footer.style";
export default function JobFooter({ url }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.likeBtn}>
				<Image
					source={icons.heartOutline}
					style={styles.likeBtnImage}
					resizeMode="contain"
				/>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.applyBtn}
				onPress={() => Linking.openURL(url)}>
				<Text style={styles.applyBtnText}>Apply</Text>
			</TouchableOpacity>
		</View>
	);
}
