import { Text, View, TouchableOpacity, Image } from "react-native";
import { icons } from "@/constants";

import styles from "./popularjobcard.style";

const PopularJobCard = ({ selectedJob, item, handleCardPress }) => {
	return (
		<TouchableOpacity
			style={styles.container(selectedJob, item)}
			onPress={() => handleCardPress(item)}>
			<TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
				<Image
					source={{
						uri:
							item?.employer_logo !== null
								? item?.employer_logo
								: "https://img.freepik.com/premium-vector/free-vector-growth-arrow-logo-template-design_634294-291.jpg",
						width: 50,
						height: 50,
					}}
					resizeMode="contain"
				/>
			</TouchableOpacity>
			<Text styles={styles.companyName} numberOfLines={1}>
				{item.employer_name}
			</Text>
			<View style={styles.infoContainer}>
				<Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
					{item.job_title}
				</Text>
				<Text style={styles.location}>{item.job_country}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default PopularJobCard;
