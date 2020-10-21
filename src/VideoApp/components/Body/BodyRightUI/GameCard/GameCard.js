import React from "react";
import { Link } from "react-router-dom";
const GameCard = (props) => {
  return (
    <div className="game__category app-pd-15">
      <div className="card__maxWidth__margin app__tower__gutter">
        <h3 style={{ paddingBottom: "0.5rem" }}>
          <Link to="/category/all" style={{ fontSize: "1.5rem" }}>
            <strong
              style={{
                color: "#00b5ad",
                fontSize: "1.5rem",
                paddingLeft: "0.1rem",
              }}
            >
              {props.categories}
            </strong>
          </Link>{" "}
          we think you’ll like
        </h3>
        <div className="app__relative">
          <div className="card__display__flex__wrap">
            {props.topGames.map((e, i) => {
              return (
                <div
                  key={i}
                  className="app__tower__120 app__tower__padding__gutter"
                >
                  <div className="app__card__padding_bottom app__card__height">
                    <div className="app__relative">
                      <div className="app__flex__column app__flex app__flex__nowrap">
                        {/* <div> */}
                          <Link
                            to={{
                              pathname: `/category/games/${e.name
                                .split(" ")
                                .join("")}`,
                              state: { data: e },
                            }}
                          >
                            <img
                              className="app__img__transition app__cursor"
                              src={e.box_art_url}
                              alt="GameImage"
                            />
                          </Link>
                        {/* </div> */}

                        <div className="app__ellipsis app__margin__top app__flex__shrink__1 app__flex__grow__1 app__color app__font__weight app__cursor">
                          <Link
                            to={{
                              pathname: `/category/games/${e.name
                                .split(" ")
                                .join("")}`,
                              state: { data: e },
                            }}
                            className="app__font__size app__cursor"
                          >
                            {e.name}
                          </Link>
                        </div>
                        <p className="app__font__size">
                          <Link
                            to={{
                              pathname: `/category/games/${e.name
                                .split(" ")
                                .join("")}`,
                              state: { data: e },
                            }}
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
            })}
          </div>
        </div>
        <div className="custom"></div>
      </div>
    </div>
  );
};

export default GameCard;
