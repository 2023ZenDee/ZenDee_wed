    import React, { useState, useEffect } from 'react';
    import { BrowserRouter as Router, Route, Link, Routes, Outlet } from 'react-router-dom';
    import axios from 'axios';

    import './report.css';

    const Report = () => {
    const [data,setData] = useState([]);
    const [sortBy, setSortBy] = useState('issue'); // 초기 선택은 좋아요순
    const [activeItem, setActiveItem] = useState('report-item1'); // 초기 선택은 '좋아요 순'
    const [titleMap] = useState({
        'report-item1' : '이벤트',
        'report-item2' : '사용자',
        'report-item3' : '댓글',
    });

    const handleItemClick = (item) => {
        setActiveItem(item)

        /*
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
        */          
    }

    return (
        <div className='dixc'>
            <h1 className='reportTitle'>신고된 {titleMap[activeItem]}</h1>
            <div>
                <ul className='reportList'>
                    <li className="report-item"
                        style={{opacity: activeItem === 'report-item1' ? 1 : 0.5}}
                        onClick={() => handleItemClick('report-item1')}>
                        <Link to="/report/event" className='nav-event'>이벤트</Link>
                        </li> {/*클릭 하면 테이블 데이터만 갈아 끼우기 */}
                    <li 
                    className='report-item' 
                    style={{opacity: activeItem === 'report-item2' ? 1 : 0.5}} 
                    onClick={() => handleItemClick('report-item2')}>
                    <Link to="/report/user" className='nav-user'>사용자</Link>
                    </li>
                    <li     
                    className='report-item' 
                    style={{opacity: activeItem === 'report-item3' ? 1 : 0.5}} 
                    onClick={() => handleItemClick('report-item3')}>
                    <Link to="/report/comment" className='nav-comment'>댓글</Link>
                    </li>
                </ul>   
            </div>
            <Outlet/>
        </div>

    );
    };

    export default Report;

