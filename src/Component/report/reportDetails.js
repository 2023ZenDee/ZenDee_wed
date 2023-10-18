import React, { useEffect, useState } from 'react'; 
import { useParams } from "react-router-dom";
import './reportDetails.css';
import Instance from '../Instance';
const ReportDetails = () => {
    const {reportIdx} = useParams();
    const [data,setData] = useState({})

    useEffect(() => {
      
        let base = "http://3.36.170.237:8070";
        let endpoint = `${base}/admin/post/${reportIdx}`;
        Instance.get(endpoint)
            .then(Response => {
              console.log(Response.data.data)
              setData(Response.data.data) 
            })
            .catch(error =>{
              console.error('Error fetching data')
            })
    },[reportIdx])

    // postId를 사용하여 해당 포스트의 상세 정보를 가져오거나 렌더링힌다.
  
    return (
      <div>

        <h2 className='event-font'>신고된 이벤트</h2>
        <h3 className='title-font'> </h3>
        <p className='report-count'>신고 받은 횟수 {data.postreporter}번</p>

        <div>
          <table>
            <tr>
              <td>
                <div className='body-container'>
                  <p className='content_font'>{data.content}</p>
                  <img src={"http://3.36.170.237:8070/"+data.postImg} alt='본문 이미지'></img>
                </div>
              </td>
              <td>
                <div className='comment-container'>
                    <h2 className='comment-title'>댓글</h2>
                    {data.comment ? data.comment.map (item => (
                      <div className='comment-box'>
                          <img src="/okky.png" className='profile' alt='프로필 이미지'></img>
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

  export default ReportDetails;