import React from 'react';

import { Link, Route, Routes } from 'react-router-dom';
import './Nav.css';
import PopPost from './PopPost';
import Declaration from './Declaration';
import Statistics from './Statistics';
const Nav = () => {
    return (
        <div>
            <div className='menu_bar'>
                <img id='logo' alt="이미지를 불러오는데 실패했습니다!" src='/zendeelogo.svg'></img>
                <ul>
                    <li><Link to='pop_post'>인기게시물</Link></li>
                    <li><Link to='declaration'>신고</Link></li>
                    <li><Link to='statistics' >통계</Link></li>
                </ul>
                
                
                
            </div>
            <div clssNme="content">
                <Routes>
                    <Route path='/pop_post'element={<PopPost/>}></Route>
                    <Route path='/declaration' element={<Declaration/>}></Route>
                    <Route path='/statistics' element={<Statistics/>}></Route>
                </Routes>
            </div>
        </div>
    );
};

export default Nav;