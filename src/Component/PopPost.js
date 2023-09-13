

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import axios from 'axios';
import './PopPost.css';

const PopPost = () => {
    const [data, setData] = useState([]);
    const [sortBy, setSortBy] = useState('likes'); // 초기 선택은 좋아요순
    const [selectedLocation, setSelectedLocation] = useState('all'); // 초기 선택은 모두 보기
    //const [searchList,setSearchList] = useState([]);
    //const [userInput, setUserInput] = useState("");

    //filter 조건으로 true/false 로 true 인것 만 반환 
    // 특정 요소를 포함하는지 검사햐여 true of false로 나눔
    // 데이터 목록중, name에 사용자 입력값이 있는 데이터만 불러오기
    // 사용자 입력값을 소문자로 변경해주었기 때문에 데이터도 소문자로

    useEffect(() => {
        // 정렬 방식에 따라 다른 엔드포인트를 사용하도록 설정
        let endpoint;
        switch (sortBy) {
            case 'likes':
                endpoint = 'http://10.80.161.164:8070/filter/posts?sortBy=likes';
                alert('좋아요 순')
                break;
            case 'comments':
                endpoint = 'http://10.80.161.164:8070/filter/posts?sortBy=bads';
                alert('싫어요 순')
                break;
            case 'views':
                endpoint = 'http://10.80.161.164:8070/filter/posts?sortBy=views';
                alert('조회수 순')
                break;
            default:
                alert('존재하지 않는 항목입니다.');
                
        }

        // 서버 요청을 보낼 때 선택된 지역에 따라 쿼리 파라미터(url) 추가
        if (selectedLocation !== 'all') {
            endpoint += `?location=${selectedLocation}`;
        }

        axios.get(endpoint)
            .then(response => {
                console.log(response)
                setData(response.data)
                
                //setMonsters(response)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [sortBy, selectedLocation]);

    //const handleChange = (e) => {
        //console.log(setUserInput(e.target.value))
    //};

    /*const filterdMonster = monsters.filter((monster) =>{
        return monster.title.toLowerCase().includes(userInput.toLocaleLowerCase());
    });*/

    //const handleChange = (e) => {
        //setUserInput(e.target.value);
    //}
    

    // 정렬 방식을 변경하는 핸들러 함수들
    const handleLikesClick = () => {
        setSortBy('likes');
    };

    const handleCommentsClick = () => {
        setSortBy('comments');
    };

    const handleViewsClick = () => {
        setSortBy('views');
    };

    // 지역 선택을 변경하는 핸들러 함수
    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
        alert(event.target.value);    
    };

    /*const filterSearchList = searchList.filter((search) => {

        return  search.name.toLowerCase().includes(userInput.toLocaleLowerCase());
    });*/

    return (
        <div>
            <input className='searchBar' ></input>
            <h1 className='PopPostTitle'>
                인기 이벤트</h1>
            <div>
                
                <ul className='PopPostList'>
                    <li onClick={handleLikesClick}>좋아요 순</li>
                    <li onClick={handleCommentsClick}>댓글 순</li>
                    <li onClick={handleViewsClick}>조회수 순</li>
                </ul>
                <select className='PopPostPlace' onChange={handleLocationChange} value={selectedLocation}>
                    <option value="all">전 지역</option>
                    <option value="서울특별시">서울특별시</option>
                    <option value="부산광역시">부산광역시</option>
                    <option value="인천광역시">인천광역시</option>
                    <option value="대구광역시">대구광역시</option>
                    <option value="대전광역시">대전광역시</option>
                    <option value="광주광역시">광주광역시</option>
                    <option value="울산광역시">울산광역시</option>
                </select>
            </div>
            <div className='content'>
                <table className=''>
                    <thead>
                        <tr>
                            <th>제목</th>
                            <th>태그</th>
                            <th>작성지역</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody className='popPostTable'>
                        {data.map(item => (
                            <tr key={item.id} {...item}> 
                                <td><Link to={`/pop_post/${item.postIdx}`}>{item.id}</Link></td>
                                <td>{item.title}</td>
                                <td>{item.content}</td> {/* 지역 데이터가 있다면 여기에 넣으세요 */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};




export default PopPost;
