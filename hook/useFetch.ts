import { useState, useEffect } from "react";
import axios from "axios";

import { API_KEY } from "@env";
import dummyData from "@/constants/data";

const key = API_KEY;

const useFetch = (
	endpoint: string,
	query: { query: string; num_pages: number }
) => {
	const [data, setData] = useState(dummyData);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const fetchData = async () => {
		setIsLoading(true);
		setData(dummyData);
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const refetch = () => {
		setIsLoading(true);
		fetchData();
	};

	return { data, isLoading, error, refetch };
};

export default useFetch;
