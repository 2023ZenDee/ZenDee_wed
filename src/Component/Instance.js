import React, {useEffect} from 'react';
import axios from 'axios';

const Instance = axios.create({
	baseURL: 'http://3.36.170.237:8070',//'http://10.80.162.94:8070',
	headers: {
		'Content-Type': 'application/json',
	}
});



 Instance.interceptors.request.use((config) => {
	const accessToken = localStorage.getItem("accessToken");
	const refreshToken = localStorage.getItem("refreshToken");
	if (!accessToken) {
		config.headers["accessToken"] = null;
		config.headers["refreshToken"] = null;
		return config;
	}
	else{
		config.headers["accessToken"] = accessToken;
		config.headers["refreshToken"] = refreshToken;
		return config;
	}
})
Instance.interceptors.response.use(
	(res) => {
		return res;
	},
	async (error) => {
		if (error.response && error.response.status === 401) {
			error.config.retry = true;
			const refreshToken = localStorage.getItem("refreshToken");
			error.config.headers.RefreshToken = `${refreshToken}`
			return axios.post(`/auth/refreshToken`, {
				headers: {
					RefreshToken: `${refreshToken}`,
					'Content-Type': 'application/json',
					withCredentials: true,
				}

			}).then(async (res) => {
				if (res.status === 200 && res.data.accessToken) {
					localStorage.setItem("accessToken", res.data.accessToken, {})
					const accesstoken = localStorage.getItem("accessToken")
					error.config.headers["accessToken"] = `${accesstoken}`;
					return Instance(error.config)
				}
			})
		}
		return Promise.reject(error)
	})



export default Instance;