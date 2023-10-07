

    import React, { useState, useEffect } from 'react';
    import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
    import axios from 'axios';
    import './PopPost.css';

    const PopPost = () => {
        const [data, setData] = useState([]);
        const [sortBy, setSortBy] = useState('likes'); // 초기 선택은 좋아요순
        const [selectedLocation, setSelectedLocation] = useState('all'); // 초기 선택은 모두 보기
        const [activeItem, setActiveItem] = useState('like'); // 초기 선택은 '좋아요 순'
        //const [searchList,setSearchList] = useState([]);
        //const [userInput, setUserInput] = useState("");

        //filter 조건으로 true/false 로 true 인것 만 반환 
        // 특정 요소를 포함하는지 검사햐여 true of false로 나눔
        // 데이터 목록중, name에 사용자 입력값이 있는 데이터만 불러오기
        // 사용자 입력값을 소문자로 변경해주었기 때문에 데이터도 소문자로



        useEffect((e) => {

            // 정렬 방식에 따라 다른 엔드포인트를 사용하도록 설정   
            const test_server = "https://jsonplaceholder.typicode.com/posts";
             const base = 'http://3.36.170.237:8070';
        
             let endpoint = `${base}/admin/filter/post?sortBy=${sortBy}`;
            
            // 서버 요청을 보낼 때 선택된 지역에 따라 쿼리 파라미터(url) 추가
            if (selectedLocation !== 'all') {
                endpoint += `?address=${selectedLocation}`;
            }

            axios.get(endpoint)
                .then(response => {
                    console.log(response.data.data)
                    setData(response.data.data)
                    
                    //console.log(response.data)
                    //setData(response.data)

                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }, [sortBy, selectedLocation]);


        // 정렬 방식을 변경하는 핸들러 함수들
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

        // 지역 선택을 변경하는 핸들러 함수
        const handleLocationChange = (event) => {
            setSelectedLocation(event.target.value);
            alert(event.target.value);    
        };

        /*const filterSearchList = searchList.filter((search) => {

            return  search.name.toLowerCase().includes(userInput.toLocaleLowerCase());
        });*/

        return (
            <div>
                <h1 className='PopPostTitle'>
                    인기 이벤트</h1>
                <div>
                    <ul className='PopPostList'>
                        <li className={activeItem === 'like' ? 'active' : ''} onClick={handleLikesClick}  id="like">좋아요 순</li>
                        <li className={activeItem === 'bads' ? 'active' : ''} onClick={handleCommentsClick} id="bads">싫어요 순</li>
                        <li className={activeItem === 'views' ? 'active' : ''} onClick={handleViewsClick} id="views">조회수 순</li>
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
                <div className='content'>
                    <table className='map-list-container'>
                        <thead>
                            <tr>
                                <th className='th-title'>제목</th>
                                <th>태그</th>
                                <th className='th-place'>작성지역</th>
                                <th>작성자</th>
                            </tr>
                        </thead>
                        <tbody className='popPostTable'>
                            {data ? data.map(item => (
                                <tr key={item.postIdx}>
                                    <td className='td-title'><Link to={`/pop_post/${item.postIdx}`}>{item.title}</Link></td>
                                    <td className='popPost-td'><Link to={`/pop_post/${item.postIdx}`}>{item.tags}</Link></td>
                                    <td className='popPost-td'>{item.address}</td>
                                    <td className='td-user popPost-td'>{item.user}</td>
                                </tr>
                                /*<tr key={item.postIdx} className='map-list-container'> 
                                    <td><Link to={`/pop_post/${item.postIdx}`}>{item.title}</Link></td>
                                    <td><Link to={`/pop_post/${item.postIdx}`}>{item.title}</Link></td>
                                    <td>{item.address}</td>
                                    <td>{item.user}</td>    
                            </tr>*/ 
                            )):''}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };




    export default PopPost;
