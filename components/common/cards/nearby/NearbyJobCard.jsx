import { Text, View, TouchableOpacity, Image } from "react-native";
import { icons } from "@/constants";

import styles from "./nearbyjobcard.style";

const NearbyJobCard = ({ job, handleNavigate }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={handleNavigate}>
			<TouchableOpacity style={styles.logoContainer}>
				<Image
					source={{
						uri: job?.employer_logo
							? job?.employer_logo
							: "https://static.vecteezy.com/system/resources/thumbnails/005/535/835/small/stock-illustration-awesome-abstract-consulting-design-template-logo-icon-isolated-free-vector.jpg",
						width: 50,
						height: 50,
					}}
					resizeMode="contain"
					styles={styles.logoImage}
				/>
			</TouchableOpacity>
			<View style={styles.textContainer}>
				<Text style={styles.jobName} numberOfLines={1}>
					{job.job_title}
				</Text>
				<Text style={styles.jobType}>{job.job_employment_type}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default NearbyJobCard;
