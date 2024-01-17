import { View, Text } from "react-native";
import React from "react";

import styles from "./specifics.style";

export default function Specifics({ title, points }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<View style={styles.pointsContainer}>
				{points?.map((point, index) => (
					<View style={styles.pointWrapper} key={index}>
						<View style={styles.pointDot} />
						<Text style={styles.pointText}>{point}</Text>
					</View>
				))}
			</View>
		</View>
	);
}
