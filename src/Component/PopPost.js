import React from 'react';
import { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import DetailPost from '../detail_post';
import axios from 'axios';
const PopPost = () => {
    
  const [data,setData] = useState([]);

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos'); 
      setData(response.data);
      console.log('서버에서 값 받음 : ', response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div  className='display'>
      <h1>인기 이벤트</h1>

      <p>좋아요 순</p>
      <p>댓글 순</p>
      <p>조회수 순</p>
      <Routes>
      <Route path="/detail_post" element={<DetailPost />} />
      </Routes>
      
    <table>
      <thead>
        <tr>
          <th>제목</th>
          <th>태그</th>
          <th>작성지역</th>
          <th>작성자</th>
        </tr>
      </thead>
      <tbody>
      {data.map((item) => {
          return (
            <tr key={item.id}>
            <td>{item.albumId}</td>
              <td>{item.id}</td>
              <td>
                <Link to="/detail_post">
                {item.title}
                </Link>
                </td>
              <td><img src={item.thumbnailUrl} alt="thumbnail"></img></td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>

  );
};

export default PopPost;