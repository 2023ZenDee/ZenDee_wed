import React from 'react';
import { useParams } from "react-router-dom";
import './PopPostDetails.css';
const DetailPage = () => {
    const {postIdx} = useParams();
  
    // postId를 사용하여 해당 포스트의 상세 정보를 가져오거나 렌더링합니다.
  
    return (


      <div>

        <h2>인기 이벤트 상세페이지</h2>


      
        <div className="content-frame">
            
        </div>


      </div>

    );
  };

  export default DetailPage;