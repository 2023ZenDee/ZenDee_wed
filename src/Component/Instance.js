import React from 'react';
import axios from 'axios';

const Instance = axios.create({
	baseURL: 'http://3.36.170.237:8070/auth/login',
	headers: {
		'Content-Type': 'applicationJson',
	}
});
Instance.interceptors.request.use((config) => {
	const accessToken = localStorage.getItem("accessToken")
	if (!accessToken) {
		config.headers["accessToken"] = null;
		config.headers["refreshToken"] = null;
		return config;
	}


	if (accessToken && config.headers) {
		const { accessToken, refreshToken } = JSON.parse(accessToken);
		config.headers["Authorization"] = `Bearer ${accessToken}`;
		config.headers["refreshToken"] = `Bearer ${refreshToken}`;
		return config;

	}
})
Instance.interceptors.response.use(
	(res) => {
		return res;
	},
	async (error) => {
		if (error.config && error.response && error.response.staus === 401) {
			error.config.retry = true;
			const refreshtoken = localStorage.getItem("refreshToken");
			error.config.headers.RefreshToken = `${refreshtoken}`
			return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
				headers: {
					RefreshToken: `${refreshtoken}`,
					'Content-Type': 'application/json',
					withCredentials: true,
				}
				
			}).then(async (res) => {
				if (res.status === 200 && res.data.accessToken) {
					localStorage.setItem("Authorization", res.data.accessToken, {})
					const accesstoken = localStorage.getItem("Authorization")
					error.config.headers["Authorization"] = `${accesstoken}`;
					return Instance(error.config)
				}
			})
		}
		return Promise.reject(error)
	})


export default Instance;