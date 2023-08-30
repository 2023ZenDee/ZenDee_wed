import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PopPost.css';

const PopPost = () => {
const [data,setData] = useState([]);
useEffect(() => {
     axios.get('http://10.80.162.89:8070/admin/reported/user') // 서버 주소
    .then(Response => {
        if(Response.data.status === 200)
            setData(Response.data.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    })
}, []);
return (
    <div>
        <h1 className='PopPostTitle'>
            신고된 이벤트</h1>
        <div>
            <ul className='PopPostList'>
                <li>이벤트</li> {/*클릭 하면 테이블 데이터만 갈아 끼우기 */}
                <li>사용자</li>
                <li>댓글</li>
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
                            <tr key={item.userReportIdx}>
                            <td>{item.userReportIdx}</td>
                            <td>{item.userReportContent}</td>
                            <td>{item.userReported_at}</td>
                            </tr>
                        ))}
                    </tbody>
            </table>               
        </div>
    </div>

    
);
};

export default PopPost;

