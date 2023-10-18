import React, { useEffect } from 'react';
import Poparea from './chart/Poparea';
import Postcount from './chart/Postcount';
import Tags from './chart/Tags'
const Statistics = () => {



  return (
    <div>
      <h2>통계</h2>
      <Postcount></Postcount>
      <Poparea></Poparea>
      <Tags></Tags>
    </div>
  );
};

export default Statistics;
//      
