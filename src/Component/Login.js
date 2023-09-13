import React, { useState } from 'react';
import axios from 'axios';
const Login = () => {

	const [id, setId] = useState("");
	const [password, setPassword] =useState("");
	const [isLogined, setIsLogined] = useState(false);
	const onChangeId = (e) => {
		setId(e.target.value)
	};
	const onChangePw = (e) => {
		setPassword(e.target.value)
	};


	let body = {
		userId : id,
		password : password
	};

	const onClickMe = async (e) => {
		e.preventDefault();
		if(!id) {
			return alert("ID를 입력하세요.")
		}else if(!password) {
			return alert("비밀번호를 입력하세요.")
		}
		setId("");
		setPassword("");
		try {
		await axios.post("http://10.80.161.164:8070/auth/login", body)
		.then((res) => {
			console.log(res.data);
			switch (res.data.code) {
				case 200: console.log("로그인 성공"); break;
				case 400: console.log("ID, 비밀번호가 비어있음"); break;
				case 401: console.log("존재하지 않는 ID입니다. "); break;
				case 402: console.log("비밀번호가 틀립니다."); break;			
				default:break;
			}
		});
		} catch(error) {
			console.log(error)
		}
	}

	return (
		<>
			<h2>로그인</h2>
				<form>
					<label>아이디 : <input type="text" id="id" placeholder='아이디를 입력하세요' value={id} onChange={onChangeId}></input><br/></label>
					<label>비밀번호 : <input type="password" id="pw" placeholder='비밀번호를 입력하세요' value={password} onChange={onChangePw}></input><br/></label>
					<button type="submit" onClick={onClickMe}>로그인</button>
				</form>
				

		</>
	);
};

export default Login;