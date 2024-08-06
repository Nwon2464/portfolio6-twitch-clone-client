// import React from "react";
// import { Link } from "react-router-dom";
// const LazyLoadGameCard = (props) => {



//   return (
//     <div className="game__category app-pd-15">
//       <div className="card__maxWidth__margin app__tower__gutter">
//         <h3 style={{ paddingBottom: "0.5rem" }}>
//           <Link to="/category/all" style={{ fontSize: "1.5rem" }}>
//             <strong
//               style={{
//                 color: "#00b5ad",
//                 fontSize: "1.5rem",
//                 paddingLeft: "0.1rem",
//               }}
//             >
//               {props.categories}
//             </strong>
//           </Link>{" "}
//           we think you’ll like
//         </h3>
//         <div className="app__relative">
//           <div className="card__display__flex__wrap">
//             {props.topGames.map((e, i) => {
//               return (
//                 <div
//                   key={i}
//                   className="app__tower__120 app__tower__padding__gutter"
//                 >
//                   <div className="app__card__padding_bottom app__card__height">
//                     <div className="app__relative">
//                       <div className="app__flex__column app__flex app__flex__nowrap">
//                         {/* <div> */}
//                           <Link
//                             to={{
//                               pathname: `/category/games/${e.name
//                                 .split(" ")
//                                 .join("")}`,
//                               state: { data: e },
//                             }}
//                           >
//                             <img
//                               className="app__img__transition app__cursor"
//                               src={e.box_art_url}
//                               alt="GameImage"
//                             />
//                           </Link>
//                         {/* </div> */}

//                         <div className="app__ellipsis app__margin__top app__flex__shrink__1 app__flex__grow__1 app__color app__font__weight app__cursor">
//                           <Link
//                             to={{
//                               pathname: `/category/games/${e.name
//                                 .split(" ")
//                                 .join("")}`,
//                               state: { data: e },
//                             }}
//                             className="app__font__size app__cursor"
//                           >
//                             {e.name}
//                           </Link>
//                         </div>
//                         <p className="app__font__size">
//                           <Link
//                             to={{
//                               pathname: `/category/games/${e.name
//                                 .split(" ")
//                                 .join("")}`,
//                               state: { data: e },
//                             }}
//                             className="app__cursor"
//                           >
//                             {props.checkViewers(e.gameViewers)}
//                           </Link>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         <div className="custom"></div>
//       </div>
//     </div>
//   );
// };

// export default LazyLoadGameCard;


import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LazyLoadGameCard = (props) => {
  const [topGames, setTopGames] = useState(props.topGames);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const lastElementRef = useCallback(
    node => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPage(prevPage => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore]
  );

  useEffect(() => {
    const fetchMoreGames = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/twitch/categories/all`);
        setTopGames(prevGames => [...prevGames, ...response.data.topGames]);
        setHasMore(response.data.topGames.length > 0);
        console.log("ASFSADFASDF",topGames);

      } catch (error) {
        console.error('Error fetching more games:', error);
      }
    };

    if (page > 1) {
      fetchMoreGames();
    }
  }, [page]);

  return (
    <div className="game__category app-pd-15">
      <div className="card__maxWidth__margin app__tower__gutter">
        <h3 style={{ paddingBottom: '0.5rem' }}>
          <Link to="/category/all" style={{ fontSize: '1.5rem' }}>
            <strong style={{ color: '#00b5ad', fontSize: '1.5rem', paddingLeft: '0.1rem' }}>
              {props.categories}
            </strong>
          </Link>{' '}
          we think you’ll like
        </h3>
        <div className="app__relative">
          <div className="card__display__flex__wrap">
            {topGames.map((e, i) => {
              if (topGames.length === i + 1) {
                return (
                  <div ref={lastElementRef} key={i} className="app__tower__120 app__tower__padding__gutter">
                    <div className="app__card__padding_bottom app__card__height">
                      <div className="app__relative">
                        <div className="app__flex__column app__flex app__flex__nowrap">
                          <Link to={{ pathname: `/category/games/${e.name.split(' ').join('')}`, state: { data: e } }}>
                            <img
                              className="app__img__transition app__cursor"
                              src={e.box_art_url}
                              alt="GameImage"
                            />
                          </Link>
                          <div className="app__ellipsis app__margin__top app__flex__shrink__1 app__flex__grow__1 app__color app__font__weight app__cursor">
                            <Link
                              to={{ pathname: `/category/games/${e.name.split(' ').join('')}`, state: { data: e } }}
                              className="app__font__size app__cursor"
                            >
                              {e.name}
                            </Link>
                          </div>
                          <p className="app__font__size">
                            <Link
                              to={{ pathname: `/category/games/${e.name.split(' ').join('')}`, state: { data: e } }}
                              className="app__cursor"
                            >
                              {props.checkViewers(e.gameViewers)}
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={i} className="app__tower__120 app__tower__padding__gutter">
                    <div className="app__card__padding_bottom app__card__height">
                      <div className="app__relative">
                        <div className="app__flex__column app__flex app__flex__nowrap">
                          <Link to={{ pathname: `/category/games/${e.name.split(' ').join('')}`, state: { data: e } }}>
                            <img
                              className="app__img__transition app__cursor"
                              src={e.box_art_url}
                              alt="GameImage"
                            />
                          </Link>
                          <div className="app__ellipsis app__margin__top app__flex__shrink__1 app__flex__grow__1 app__color app__font__weight app__cursor">
                            <Link
                              to={{ pathname: `/category/games/${e.name.split(' ').join('')}`, state: { data: e } }}
                              className="app__font__size app__cursor"
                            >
                              {e.name}
                            </Link>
                          </div>
                          <p className="app__font__size">
                            <Link
                              to={{ pathname: `/category/games/${e.name.split(' ').join('')}`, state: { data: e } }}
                              className="app__cursor"
                            >
                              {props.checkViewers(e.gameViewers)}
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="custom"></div>
      </div>
    </div>
  );
};

export default LazyLoadGameCard;
