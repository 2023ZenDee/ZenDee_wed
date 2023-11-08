import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import axios from 'axios';

import './reportUser.css';
import Instance from '../../Instance';

const ReportUser = () => {
const [data,setData] = useState([]);


useEffect(() => {
    //let base = 'http://3.36.170.237:8070';
    let endpoint = `/admin/reported/user`;      

     Instance.get(endpoint) // 서버 주소
    .then(Response => {
        //if(Response.data.status === 200)
            setData(Response.data.data);
            console.log(Response)   
            console.log('잘 됨')
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        console.log('안 됨')
    })
    }, []);



return (
    <div className='content'>
            <table className='table-frame'>
                    <tbody>
                        {data ? data.map(item => (
                            <tr key={item.userReporterIdx}>
                                <ul className='report_user_box_frame'>
                                    <li className='report_user_box'><Link className='report_user_link1' to={`report/${item.userReporterIdx}`}><img src="https://cdn.aitimes.com/news/photo/202302/149311_158082_1154.png" alt="신고된 사용자 프로필 이미지" className='report_profile_img'></img></Link></li>
                                    <li className='report_user_box'>{item.userReportContent}</li>
                                    <li className='report_user_box'>누적 신고 : {item.sender}번</li>
                                </ul>
                            </tr>
                        )): ''}
                    </tbody>
            </table>               
        </div>
        
);
};

export default ReportUser;