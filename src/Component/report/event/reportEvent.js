import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import axios from 'axios';

import './reportEvent.css';
import Instance from '../../Instance';

const ReportEvent = () => {
const [data,setData] = useState([]);
const [sortBy, setSortBy] = useState('issue'); // 초기 선택은 좋아요순
const [activeItem, setActiveItem] = useState('report-item1'); // 초기 선택은 '좋아요 순'

useEffect(() => {


    let endpoint = `/admin/reported/${sortBy}?page=1&pageSize=7`;
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

    const handleItemClick = (item) => {
    setActiveItem(item)
    if(activeItem === 'report-item1'){
        setSortBy('issue')
        console.log('이벤트')
        console.log(item);
    }           
    
    else if(activeItem === 'report-item2'){
        setSortBy('user')
        console.log('사용자')
        console.log(item);
    }
    else if(activeItem === 'report-item3'){
        setSortBy('comment')              
        console.log('댓글')
        console.log(item);
    }
}

return (
    <div className='content'>
            <table className='table-frame'>
                <thead>
                <tr>
                    <th className='th-report-title'>제목</th>
                    <th className=''>태그</th>
                    <th>작성지역</th>
                    <th>작성자</th>
                </tr>
                </thead>
                    <tbody>
                        {data ? data.map(item => (
                            <tr key={item.postReporterIdx}>
                            <td className='report-td-left'><Link className='td-Link' to={`/report/${item.posterIdx}`}>{item.portReporterContent}</Link></td>
                            <td className='td'>{item.posterIdx}</td>
                            <td className='td'>{item.portReporterContent}</td>
                            <td className='td td-right'>{item.authorIdx}</td>
                            </tr>
                        )): ''}
                    </tbody>
            </table>               
        </div>
);
};

export default ReportEvent;

