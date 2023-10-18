import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import axios from 'axios';

import './report.css';

const Report = () => {
const [data,setData] = useState([]);
const [sortBy, setSortBy] = useState('issue'); // 초기 선택은 좋아요순
const [activeItem, setActiveItem] = useState('report-item1'); // 초기 선택은 '좋아요 순'

useEffect(() => {


    let base = 'http://3.36.170.237:8070';
    let endpoint = `${base}/admin/reported/${sortBy}`;


     axios.get(endpoint) // 서버 주소
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
    <div>
        <h1 className='reportTitle'>신고된 이벤트</h1>
        <div>
            <ul className='reportList'>
                <li className="report-item" style={{opacity: activeItem === 'report-item1' ? 1 : 0.5}} onClick={() => handleItemClick('report-item1')}>이벤트</li> {/*클릭 하면 테이블 데이터만 갈아 끼우기 */}
                <li className='report-item' style={{opacity: activeItem === 'report-item2' ? 1 : 0.5}} onClick={() => handleItemClick('report-item2')}>사용자</li>
                <li className='report-item' style={{opacity: activeItem === 'report-item3' ? 1 : 0.5}} onClick={() => handleItemClick('report-item3')}>댓글</li>
            </ul>
        </div>

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
    </div>

);
};

export default Report;

