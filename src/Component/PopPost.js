    import React, { useState, useEffect } from 'react';
    import axios from 'axios';

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
            <h1>
                인기 이벤트</h1>
            <div>
                <ul>
                    <li>좋아요 순</li>
                    <li>댓글 순</li>
                    <li>조회수 순</li>
                    <select>
                        <option>대구광역시</option>
                        <option>대전광역시</option>
                        <option>부산광역시</option>
                        <option>인천광역시</option>
                        <option>울산광역시</option>
                        <option>광주광역시</option>
                    </select>
                </ul>
            </div>
            <div className='content'>
                <table>
                    <thead>
                    <tr>
                        <th>제목</th>
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
                                <td>{item.sender}</td>
                                </tr>
                            ))}
                        </tbody>
                </table>               
            </div>
        </div>

        
    );
};

export default PopPost;

