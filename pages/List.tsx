import React, { useState, useEffect } from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

  function List({ data }: { data: any }) {
    const [isFetching, setIsFetching] = useState(false);
    const [posts, setPosts] = useState(data.message);
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    useEffect(() => {
      if (!isFetching) console.log('new'); return fetchMoreListItems();
    }, [isFetching]);
  
  
    function handleScroll() {
      if (Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight || isFetching) return setIsFetching(true);
    }


    
  
    function fetchMoreListItems() {
      setTimeout(() => {
        console.log(posts)
        setIsFetching(false);
      }, 2000);
    }
  
    return (
      <>
        <ul className="list-group mb-2">
          {posts.map((post: any, index: React.Key | null | undefined) =>
            <div key={index} className="card mb-4" style={{ width: '25rem' }} >
              <TransformWrapper
                initialScale={1}
                initialPositionX={0}
                initialPositionY={0}
  
              >
                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                  <React.Fragment>
                    <TransformComponent>
                      <img className="card-img-top" src={post} alt="test" />
                    </TransformComponent>
                    <div className="btn-group btn-group-toggle tools" data-toggle="buttons">
                      <button onClick={() => zoomIn()} type="button" className="btn btn-outline-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                      </svg></button>
                      <button onClick={() => zoomOut()} type="button" className="btn btn-outline-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                      </svg></button>
                      <button onClick={() => resetTransform()} type="button" className="btn btn-outline-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg></button>
                    </div>
                  </React.Fragment>
                )}
              </TransformWrapper>
              <div className="card-body" >
                <h5 className="card-title">{index}</h5>
              </div>
            </div>
          )}
        </ul>
        {isFetching && 'Fetching more photos'}
      </>
    );
  }
  
  
  
  export default List;