

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import axios from 'axios';
import './PopPost.css';

const PopPost = () => {
    const [data, setData] = useState([]);
    const [sortBy, setSortBy] = useState('likes'); // 초기 선택은 좋아요순
    const [selectedLocation, setSelectedLocation] = useState('all'); // 초기 선택은 모두 보기

    useEffect(() => {
        // 정렬 방식에 따라 다른 엔드포인트를 사용하도록 설정
        let endpoint;
        switch (sortBy) {
            case 'likes':
                endpoint = 'http://10.80.163.48:8070/admin/filter/posts?sortBy=likes';
                alert('좋아요 순')
                break;
            case 'comments':
                endpoint = 'http://10.80.163.48:8070/admin/filter/posts?sortBy=comments';
                alert('댓글 순')
                break;
            case 'views':
                endpoint = 'http://10.80.163.48:8070/admin/filter/posts?sortBy=views';
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
                setData(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [sortBy, selectedLocation]);

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

    return (
        <div>
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
                            <tr key={item.postIdx}>
                                <td><Link to={`/pop_post/${item.postIdx}`}>{item.postIdx}</Link></td>
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
