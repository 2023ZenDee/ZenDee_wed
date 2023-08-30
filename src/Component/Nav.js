import React from 'react';

import { Link, Route, Routes } from 'react-router-dom';
import './Nav.css';
import PopPost from './PopPost';
import Declaration from './Declaration';
import Statistics from './Statistics';
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
            <div className='dixc'>
                <Routes>
                    <Route path='/pop_post'element={<PopPost/>}></Route>
                    <Route path='/declaration' element={<Declaration/>}></Route>
                    <Route path='/statistics' element={<Statistics/>}></Route>
                </Routes>
            </div>
        </>
    );
};

export default Nav;