import { View, Text, Image } from "react-native";
import React from "react";

import styles from "./company.style";
import { icons } from "@/constants";

export default function Company({
	jobTitle,
	companyLogo,
	companyName,
	location,
}) {
	return (
		<View style={styles.container}>
			<View style={styles.logoBox}>
				<Image
					source={{
						uri:
							companyLogo ||
							"https://static.vecteezy.com/system/resources/thumbnails/005/535/835/small/stock-illustration-awesome-abstract-consulting-design-template-logo-icon-isolated-free-vector.jpg",
					}}
					style={styles.logoImage}
				/>
			</View>
			<View style={styles.jobTitleBox}>
				<Text style={styles.jobTitle}>{jobTitle}</Text>
			</View>
			<View style={styles.companyInfoBox}>
				<Text style={styles.companyName}>{companyName} / </Text>
				<View style={styles.locationBox}>
					<Image
						source={icons.location}
						resizeMode="contain"
						style={styles.locationImage}
					/>
					<Text style={styles.locationName}>{location}</Text>
				</View>
			</View>
		</View>
	);
}
