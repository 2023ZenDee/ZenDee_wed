import React, { useState } from 'react';

import { Link, Route, Routes } from 'react-router-dom';
import './Nav.css';
import PopPost from './PopPost/PopPost';
import PopPostDetails from'./Details/PopPostDetails';
import Report from './report/report';
import Statistics from './Statistics';
import ReportDetails from './Details/reportDetails'
import Login from './Login'
const Nav = () => {

    const [loginT,setLoginT] = useState("로그인");
    const [logoutT, setLogoutT] = useState("로그아웃");

    return (
        <> 
            <div>
                <ul className='active nav'>
                    <img className='logo' src='/zendeelogo.svg' alt="이미지 불러오기 실패"></img>
                    <li><Link to='pop_post'>인기게시물</Link></li>
                    <li><Link to='report'>신고</Link></li>
                    <li><Link to='statistics' >통계</Link></li>
                </ul>    
            </div>
            <div className='test'>
                    <div className='searchBar'>
                        <input className='searchInput'></input>
                        <img className="searchIcon" src="/img/Search.svg" alt='이미지 불러오기 실패'></img>               
                    </div>
                    <p className='login'>로그아웃</p>
                </div>
            <div className='dixc'>
            



                <Routes>
                    <Route path='/pop_post'element={<PopPost/>}></Route>
                    <Route path='/pop_post/:postIdx' element={<PopPostDetails/>}></Route>
                    <Route path='/report' element={<Report/>}></Route>
                    <Route path='/report/:reportIdx' element={<ReportDetails/>}></Route>
                    <Route path='/statistics' element={<Statistics/>}></Route>
                    <Route path='/' element={<Login/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                </Routes>
            </div>
        </>
    );
};

export default Nav;