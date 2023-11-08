import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import './PopPostDetails.css';
import Instance from '../../Instance';
const PopPostDetails = () => {
    //const [data]
    const {postIdx} = useParams();
    const [data,setData] = useState({});

    useEffect(() => {

        //const base = 'http://3.36.170.237:8070';
        // const test_server = "https://jsonplaceholder.typicode.com/posts/1";
        //const complete = "  ${base}/admin/posts/${postIdx}  ";

        console.log(`/admin/post/${postIdx}`)
      Instance.get(`/admin/post/${postIdx}`)
            .then(Response => {
              console.log(Response.data.data) // 원래 Response.data.data
              setData(Response.data.data) // 원래 Response.data.data
              
            })
            .catch(error => { 
              console.error('Error fetching data:', error);
          });

    },[postIdx])

    // postIdx를 사용하여 해당 포스트의 상세 정보를 가져오거나 렌더링합니다.
  
    return (
      <div>

        <h2 className='event-font'>이벤트</h2>
        <h3 className='title-font'>{data.title}</h3>
        <p className='report-count'>신고 받은 횟수 11번</p>
        <div>
          <table>
            <tr>
              <td>
                <div className='body-container'>
                  <p className='content_font'>{data.content}</p>
                </div>
              </td>
              <td>
                <div className='comment-container'>
                    <h2 className='comment-title'>댓글</h2>
                    {data.comment? data.comment.map (item => (
                      <div className='comment-box'>
                          <img src="https://static.wikia.nocookie.net/supernaturalpowers/images/6/6d/%ED%8C%8C%EB%9E%80%EC%83%89_%EA%B7%B8%EB%A6%BC.png/revision/latest/scale-to-width-down/360?cb=20211005054435&path-prefix=ko" className='profile'></img>
                          <div className='comment_text'>
                              <div className='comment-user'>{item.user}<br/></div>
                              <p className='comment-Content'>{item.cmtContent}<br/>{item.cmtContent}<br/>;;jsdkfjsfjkeeeeeeeeeeeeeeejsdkfjsfjkeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeejsdkfjsfjkeeeeeeeelfdkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkeeeeeeeeeeeeeeeeeeeeeeeeeeeeeejsdkfjsfjkeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeejsdkfjsfjkeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeejsdkfjsfjkeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeejsdkfjsfjkeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeejsdkfjsfjkeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeejsdkfjsfjkeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeejsdkfjsfjkeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeejsdkfjsfjkeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                          </div>
                      </div>
                    )): ''}
                    {/* 지역 데이터가 있다면 여기에 넣으세요 */}
                </div>
              </td>
            </tr>
          </table>
        </div>
    </div>

    );
  };

  export default PopPostDetails;