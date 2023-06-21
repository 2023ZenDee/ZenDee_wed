import React from 'react';

import { Link, Route, Routes } from 'react-router-dom';
import './Nav.css';
import Declaration from './Declaration';
import Statistics from './Statistics';
import PopPost from './PopPost';
const Nav = () => {
    return (
        <div className='menu_bar'>
            <img id='logo' alt="이미지를 불러오는데 실패했습니다!" src='/zendeelogo.svg'></img>
            <div id ='menu'>
            <Link to='pop_post'>인기게시물</Link>
            <Link to='declaration'>신고</Link>
            <Link to='statistics' >통계</Link>
            </div>
            <div>
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