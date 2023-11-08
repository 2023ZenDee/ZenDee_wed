/*
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import axios from 'axios';
import { useParams } from "react-router-dom";
import './reportUserDetails.css';
import Instance from '../../Instance';

const ReportUserDetails = () => {
const [data,setData] = useState([]);
const {userId} = useParams();


useEffect(() => {
    //let base = 'http://3.36.170.237:8070';
    let endpoint = `/admin/detail/user/${userId}`;

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
    }, [userId]);


return (
    <div  className='content'>
            <table className='table-frame'>
                    <tbody>
                        {data ? data.map(item => (
                            <tr key={item.userReporterIdx}>
                            <td className='report-user'><Link className='' to={`/report/${item.posterIdx}`}>{item.userReportContent}</Link></td>
                            <td className='report-count'>누적 신고 :{item.sender}</td>
                            </tr>
                        )): ''}
                    </tbody>
            </table>               
        </div>
);
};
export default ReportUserDetails;

*/      