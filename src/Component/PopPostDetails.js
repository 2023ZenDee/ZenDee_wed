import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import './PopPostDetails.css';
import axios from 'axios';
const DetailPage = () => {
    //const [data]
    const {postIdx} = useParams();
    const [data,setData] = useState('');
    useEffect(() => {
      
      axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(Response => {
              console.log(Response)
              setData(Response.data)
            })
            .catch(error => {
              console.error('Error fetching data:', error);
          });


    },[postIdx])
  

    // postId를 사용하여 해당 포스트의 상세 정보를 가져오거나 렌더링합니다.
  
    return (


      <div className='content-frame'>

        <h2 className='event-font'>이벤트</h2>
        <h3 className='title-font'>세상에 이런일이 홀리몰리</h3>
        <div>
          <table>
            <tr>
              <td>
                <div className='body-container'>
                  <p>{data.title}</p>
                </div>
              </td>
              <td>
                <div className='comment-container'>
                    <h2 className='comment-title'>댓글</h2>
                    
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>

    );
  };

  export default DetailPage;