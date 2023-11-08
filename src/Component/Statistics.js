import React, { useEffect } from 'react';
import RegionPost from './chart/RegionPost';
import TagsPost from './chart/TagsPost';
import TimesPost from './chart/TimesPost';
const Statistics = () => {



  return (
    <>
    <div className='dixc'>
      <h2>통계</h2>
      <RegionPost></RegionPost>
      <TagsPost></TagsPost>
      <TimesPost></TimesPost>
    </div>
    </>
  );
};

export default Statistics;
//      
