import React, { useState } from 'react';

import { Link, Route, Routes } from 'react-router-dom';
import './Nav.css';
import PopPost from './PopPost';
import PopPostDetails from'./PopPostDetails.js';
import Declaration from './Declaration';
import Statistics from './Statistics';
import DeclarationDetails from './DeclarationDetails'
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
                    <li><Link to='declaration'>신고</Link></li>
                    <li><Link to='statistics' >통계</Link></li>
                </ul>    
            </div>

            <div className='dixc'>
                 <div className='test'>
                    <div className='searchBar'>
                    <input className='searchInput'></input>
                    <img className="searchIcon" src="/img/Search.svg" alt='이미지 불러오기 실패'></img>               
                    </div>
                 <p className='login'>로그아웃</p>
                 </div>



                <Routes>
                    <Route path='/DeclarationDetails/:postIdx' element={<DeclarationDetails/>}></Route>
                    <Route path='/pop_post'element={<PopPost/>}></Route>
                    <Route path='/pop_post/:postIdx' element={<PopPostDetails/>}></Route>
                    <Route path='/declaration' element={<Declaration/>}></Route>
                    <Route path='/statistics' element={<Statistics/>}></Route>
                    <Route path='/' element={<Login/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                </Routes>
            </div>
        </>
    );
};

export default Nav;