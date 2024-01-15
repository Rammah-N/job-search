import {
	Text,
	View,
	SafeAreaView,
	ScrollView,
	ActivityIndicator,
	RefreshControl,
} from "react-native";
import { Stack, useRouter, useGlobalSearchParams } from "expo-router";

import { useCallback, useState, usestate } from "react";

import {
	Company,
	JobAbout,
	JobFooter,
	JobTabs,
	ScreenHeaderBtn,
	Specifics,
} from "../../components";
import dummyData from "../../constants/data";
import { COLORS, SIZES, icons } from "../../constants";
import useFetch from "../../hook/useFetch";

const findJob = (id) => {
	return dummyData.find((job) => job.job_id === id);
};

const JobDetails = () => {
	const params = useGlobalSearchParams();
	const router = useRouter();
	const { isLoading, error } = useFetch();
	const [refreshing, setRefreshing] = useState(false);
	const data = findJob(params.id);
	console.log(data);
	const onRefresh = () => {};
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.lightWhite },
					headerShadowVisible: false,
					headerBackVisible: false,
					headerLeft: () => (
						<ScreenHeaderBtn
							iconUrl={icons.left}
							dimension="60%"
							handlePress={() => router.back()}
						/>
					),
					headerRight: () => (
						<ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
					),
					headerTitle: "",
				}}
			/>

			<>
				<ScrollView
					showsVerticalScrollIndicator={false}
					refreshControl={
						<RefreshControl refreshing={refreshing} refresh={onRefresh} />
					}>
					{isLoading ? (
						<ActivityIndicator size="large" color={COLORS.primary} />
					) : error ? (
						<Text>Something went wrong</Text>
					) : data.length === 0 ? (
						<Text>No Data</Text>
					) : (
						<View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
							<Company
								companyLogo={data.employer_logo}
								jobTitle={data.job_title}
								companyName={data.employer_name}
								location={data.job_country}
							/>
							<JobTabs />
						</View>
					)}
				</ScrollView>
			</>
		</SafeAreaView>
	);
};

export default JobDetails;
