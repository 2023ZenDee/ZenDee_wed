import React, { useState } from 'react';

import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './Nav.css';
import PopPost from './PopPost/PopPost';
import PopPostDetails from'./PopPost/Details/PopPostDetails';
import Report from './report/report';
import Statistics from './Statistics';
import ReportDetails from './report/Details/reportDetails'
import ReportUser from './report/user/reportUser';
import ReportEvent from './report/event/reportEvent';
import ReportComment from './report/comment/reportComment';
import ReportUserDetails from './report/user/Details/reportUserDetails';
import Login from './Login'
const Nav = () => {

    const [loginT,setLoginT] = useState("로그인");
    const [logoutT, setLogoutT] = useState("로그아웃");
  
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        const answer = window.confirm(`로그아웃 하시겠습니까?`)
        if(answer == true) {
            navigate('/login');
        }else {
            alert("취소");;
        }
    }

    return (
        <> 
            <div>
                <ul className='active nav'>
                    <img className='logo' src='/zendeelogo.svg' alt="이미지 불러오기 실패"></img>
                    <li><Link to='pop_post' className='nav-li'>인기게시물</Link></li>
                    <li><Link to='report/event' className='nav-li'>신고</Link></li>
                    <li><Link to='statistics' className='nav-li'>통계</Link></li>
                </ul>    
            </div>
            <div className='test'>
                    <div className='searchBar'>
                        <input className='searchInput'></input>
                        <img className="searchIcon" src="/img/Search.svg" alt='이미지 불러오기 실패'></img>               
                    </div>
                    <button className='login' onClick={logout}>로그아웃</button>
            </div>
            <div>
                <Routes>
                    <Route path='/pop_post'element={<PopPost/>}></Route>
                    <Route path='/pop_post/:postIdx' element={<PopPostDetails/>}></Route>
                    <Route path='/report/*' element={<Report/>}>
                        <Route index element={<ReportEvent/>}/>
                        <Route index element={<ReportUser/>}/>
                        <Route index element={<ReportComment/>}/>
                        <Route path="event" element={<ReportEvent/>}/>
                        <Route path="user" element={<ReportUser/>}/>
                        <Route path=':userId'></Route>
                        <Route path="comment" element={<ReportComment/>}/>
                        <Route path=":posterIdx" element={<ReportDetails/>}></Route>
                    </Route>
                    <Route path='/statistics' element={<Statistics/>}></Route>
                    <Route path='/' element={<Login/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                </Routes>
            </div>
        </>
    );
};

export default Nav;