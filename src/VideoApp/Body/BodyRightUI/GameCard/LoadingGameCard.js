import React from "react";
import Skeleton from "react-loading-skeleton";

const LoadingGameCard = () => {
  return (
    <div className="game__category">
      <h3>
        <Skeleton height={28} width={250} />
      </h3>

      <div className="app__tower__gutter app__flex__tower app__flex__nowrap">
        {Array(8)
          .fill()
          .map((e, i) => {
            return (
              <div
                key={i}
                className="app__tower__120 app__tower__padding__gutter"
              >
                <div className="app__card__padding_bottom app__card__height">
                  <div className="app__relative">
                    <div className="app__flex__column app__flex app__flex__nowrap">
                      <div>
                        <Skeleton width="155px" height="215px" />{" "}
                      </div>

                      <div className="app__ellipsis app__margin__top app__flex__shrink__1 app__flex__grow__1 app__color app__font__weight app__cursor">
                        <Skeleton />{" "}
                      </div>
                      <p className="app__font__size">
                        <Skeleton width="70px" />{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="custom">
        <Skeleton />
      </div>
    </div>
  );
};

export default LoadingGameCard;
