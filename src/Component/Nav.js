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


            <div className='blanak'>
            <div className='searchBar'>
                    <input className='searchInput'></input>
                    <img className="searchIcon" src="/img/Search.svg" alt='이미지 불러오기 실패'></img>               
                    </div>
            </div>


            <div className='dixc'>


                 {/*<div className='test'>
                 <Link to="login" className='login'>로그인</Link>
                </div>*/}



                <Routes>
                    <Route path='/DeclarationDetails/:postIdx' element={<DeclarationDetails/>}></Route>
                    <Route path='/pop_post'element={<PopPost/>}></Route>
                    <Route path='/pop_post/:postIdx' element={<PopPostDetails/>}></Route>
                    <Route path='/declaration' element={<Declaration/>}></Route>
                    <Route path='/statistics' element={<Statistics/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                </Routes>
            </div>
        </>
    );
};

export default Nav;