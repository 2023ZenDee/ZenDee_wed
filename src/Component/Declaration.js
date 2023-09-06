import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import axios from 'axios';
import './PopPost.css';

const PopPost = () => {
const [data,setData] = useState([]);
const [sortBy, setSortBy] = useState('events'); // 초기 선택은 좋아요순
useEffect(() => {

    let endpoint;
    switch (sortBy) {
        case 'events':
            endpoint = 'http://10.80.163.48:8070/admin/filter/posts?sortBy=likes';
            alert('이벤트')
            break;
        case 'users':
            endpoint = 'http://10.80.163.48:8070/admin/filter/posts?sortBy=comments';
            alert('사용자')
            break;
        case 'comments':
            endpoint = 'http://10.80.163.48:8070/admin/filter/posts?sortBy=views';
            alert('댓글')
            break;
        default:
            alert('존재하지 않는 항목입니다.');
    }


     axios.get(endpoint) // 서버 주소
    .then(Response => {
        //if(Response.data.status === 200)
            setData(Response.data.data);
            console.log(Response)
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    })
}, [sortBy]);


const handleEventsClick = () => {
    setSortBy('events');
};

const handleUsersClick = () => {
    setSortBy('users');
};

const handleCommentsClick = () => {
    setSortBy('comments');
};

return (
    <div>
        <h1 className='PopPostTitle'>
            신고된 이벤트</h1>
        <div>
            <ul className='PopPostList'>
                <li onClick={handleEventsClick}>이벤트</li> {/*클릭 하면 테이블 데이터만 갈아 끼우기 */}
                <li onClick={handleUsersClick}>사용자</li>
                <li onClick={handleCommentsClick}>댓글</li>
            </ul>
        </div>
        <div className='content'>
            <table className=''>
                <thead>
                <tr>
                    <th>태그</th>
                    <th>작성지역</th>
                    <th>작성자</th>
                </tr>
                </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.postIdx}>
                            <td><Link to={`/Declaration/${item.postIdx}`}>{item.postIdx}</Link></td>
                            <td>{item.title}</td>
                            <td>{item.content}</td>
                            </tr>
                        ))}
                    </tbody>
            </table>               
        </div>
    </div>

    
);
};

export default PopPost;

