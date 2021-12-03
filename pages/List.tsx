import React, { useState, useEffect } from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

  function List({ data }: { data: any }) {
    const [isFetching, setIsFetching] = useState(false);
    const [posts, setPosts] = useState(data.message);
  
    
  
    return (
      <>
        <ul className="list-group mb-2">
          
        </ul>
        {isFetching && 'Fetching more photos'}
      </>
    );
  }
  
  
  
  export default List;