import { useParams } from "react-router-dom";

const DeclarationDetails = () => {
    const {postIdx} = useParams();
  
    // postId를 사용하여 해당 포스트의 상세 정보를 가져오거나 렌더링합니다.
  
    return (
      <div>
        <h2>신고 상세페이지</h2>
        <p>Post ID  : {postIdx}</p>
        {/* 상세 정보를 표시합니다. */}
      </div>
    );
  };

  export default DeclarationDetails;