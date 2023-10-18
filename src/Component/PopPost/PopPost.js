
    import React, { useState, useEffect } from 'react';
    import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
    import axios from 'axios';
    import Instance from '../Instance';
    import './PopPost.css';


    const PopPost = () => {
        const [data, setData] = useState([]);
        const [sortBy, setSortBy] = useState('likes'); // 초기 선택은 좋아요순
        const [selectedLocation, setSelectedLocation] = useState('all'); // 초기 선택은 모두 보기
        const [activeItem, setActiveItem] = useState('item1'); // 초기 선택은 '좋아요 순'
        const [opacity, setOpacity] = useState(1.0);

        useEffect((e) => {

            // 정렬 방식에 따라 다른 엔드포인트를 사용하도록 설정   
            //const test_server = "https://jsonplaceholder.typicode.com/posts";
            // const base = 'http://10.80.162.94:8070';
        
            let endpoint = `/admin/filter/post?sortBy=${sortBy}`;
            
            // 서버 요청을 보낼 때 선택된 지역에 따라 쿼리 파라미터(url) 추가
            if (selectedLocation !== 'all') {
                endpoint += `?address=${selectedLocation}`;
            }

            Instance.get(endpoint)
                .then(response => {
                    console.log(response.data)
                    setData(response.data.data)
                    
                    //console.log(response.data)
                    //setData(response.data)
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }, [sortBy, selectedLocation]);

        // 정렬 방식을 변경하는 핸들러 함수들
        /*
        const handleLikesClick = () => {
            setSortBy('likes');
            setActiveItem('like'); // 클릭된 항목을 활성화로 설정

        };

        const handleCommentsClick = () => {
            setSortBy('bads');
            setActiveItem('bads'); // 클릭된 항목을 활성화로 설정
        };

        const handleViewsClick = () => {
            setSortBy('views');
            setActiveItem('views'); // 클릭된 항목을 활성화로 설정
        };
        */

        // 지역 선택을 변경하는 핸들러 함수
        const handleLocationChange = (event) => {
            setSelectedLocation(event.target.value);
        };

        const handleItemClick = (item) => {
            setActiveItem(item)
            if(activeItem === 'item1'){
                setSortBy('likes')
                console.log('좋아요')
                console.log(item);
                //alert('좋아요 순')
            }           
            
            else if(activeItem === 'item2'){
                setSortBy('comments')
                //alert('댓글 순')
                console.log('댓글')
                console.log(item);
            }
            else if(activeItem === 'item3'){
                setSortBy('views')              
                //alert('조회수 순')
                console.log('조회수')
                console.log(item);
            }           
        }

        return (
            <div>
                <h1 className='PopPostTitle'>인기 이벤트</h1>
                <div>
                        <ul className='PopPostList'>
                            <li className="list-item" style={{ opacity: activeItem === 'item1' ? 1 : 0.5}} onClick={() => handleItemClick('item1')} >좋아요 순</li>
                            <li className="list-item" style={{ opacity: activeItem === 'item2' ? 1 : 0.5}} onClick={() => handleItemClick('item2')} >댓글 순</li>
                            <li className="list-item" style={{ opacity: activeItem === 'item3' ? 1 : 0.5}} onClick={() => handleItemClick('item3')} >조회수 순</li>
                        </ul>
                    <select className='PopPostPlace' onChange={handleLocationChange} value={selectedLocation}>
                        <option value="all">전 지역</option>
                        <option value="서울특별시">서울특별시</option>
                        <option value="부산광역시">부산광역시</option>
                        <option value="인천광역시">인천광역시</option>
                        <option value="대구광역시">대구광역시</option>
                        <option value="대전광역시">대전광역시</option>
                        <option value="광주광역시">광주광역시</option>
                        <option value="울산광역시">울산광역시</option>
                    </select>
                </div>

                <div>
                    <table className='map-list-container'>
                        <thead>
                            <tr>
                                <th className='th-title th-font'>제목</th>
                                <th className='th-font'>태그</th>
                                <th className='th-place th-font'>작성지역</th>
                                <th className='th-font'>작성자</th>
                            </tr>
                        </thead>
                        <tbody> 
                            {data ? data.map(item => (
                                <tr key={item.postIdx}>
                                    <td className='td-title'><Link className='td-font-Link' to={`/pop_post/${item.postIdx}`}>{item.title}</Link></td>
                                    <td className='popPost-td'><Link className='td-font-Link' to={`/pop_post/${item.postIdx}`}>{item.tags}</Link></td>
                                    <td className='popPost-td td-font'>{item.address}</td>
                                    <td className='td-user popPost-td td-font'>{item.user}</td>
                                </tr>
                            )):''}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    };




    export default PopPost;
