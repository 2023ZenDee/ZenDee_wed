import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import axios from 'axios';

import './reportComment.css';
import Instance from '../../Instance';

const ReportComment = () => {
const [data,setData] = useState([]);
const [activeItem, setActiveItem] = useState('report-item1'); // 초기 선택은 '좋아요 순'

useEffect(() => {
    //let base = 'http://3.36.170.237:8070';
    let endpoint = `/admin/reported/comment`;

     Instance.get(endpoint) // 서버 주소
    .then(Response => {
        //if(Response.data.status === 200)
            setData(Response.data.data);
            console.log(Response)
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    })
    }, []);


return (
    <div  className='content'>
            <table className='table-frame'>
                <thead>
                    <tr>
                        <th></th>
                        <th className='commentTitle'>게시물</th>
                        <th className='commentTitle'>작성지역</th>
                        <th className='commentTitle'>작성자</th>
                    </tr>
                </thead>
                    <tbody>
                        {data ? data.map(item => (
                            <tr key={item.cmtReporterIdx}>
                            <td className='td td-left'><Link className='td-Link' to={`/report/${item.posterIdx}`}>{item.cmtReportContent}</Link></td>
                            <td className='td'>{item.commentIdx }</td>
                            <td className='td'>{item.cmtReported_at}</td>
                            <td className='td td-right'>{item.authorIdx}</td>
                            </tr>
                        )): ''}
                    </tbody>
            </table>               
        </div>
);
};

export default ReportComment;