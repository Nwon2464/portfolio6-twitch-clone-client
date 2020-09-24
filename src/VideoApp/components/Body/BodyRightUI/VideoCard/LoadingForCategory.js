import React from "react";
import Skeleton from "react-loading-skeleton";
const LoadingForCategory = () => {
  return (
    <div className="game__card app-pd-15">
      <div className="card__maxWidth__margin app__tower__gutter">
        <div className="app-flex">
          <div>
            <Skeleton width={180} height={240} />
          </div>
          <div style={{ marginTop: 50, marginLeft: 40 }}>
            <Skeleton width={150} height={40} />
            <div style={{ marginTop: 10, marginLeft: 0 }}>
              <Skeleton width={250} height={20} />
            </div>
            <div style={{ marginTop: 10, marginLeft: 0 }}>
              <Skeleton width={500} height={15} />
            </div>
            <div style={{ marginTop: 15, marginLeft: 0 }}>
              <Skeleton width={90} height={30} />
            </div>
          </div>
        </div>
        <h3>
          <Skeleton height={28} width={250} />
        </h3>
        <div className="app__relative">
          <div className="card__display__flex__wrap">
            {Array(4)
              .fill()
              .map((e, i) => {
                return (
                  <div
                    key={i}
                    className="app__tower__300 app__tower__padding__gutter"
                  >
                    <div className="app__card__height">
                      <div className="app__card__padding_bottom app__card__height">
                        <article className="card__display__flex__direction">
                          <div className="app__width app__order__2 app__margin__top">
                            <div className="app__flex__nowrap app__flex">
                              <div className="app__min__width__0 app__order__2 app__flex__shrink__1 app__flex__grow__1 app__width">
                                <div className="app__margin__bottom">
                                  <div className="channel__font_1">
                                    <h3 className="app__ellipsis app__font__weight">
                                      <Skeleton width="227px" />
                                    </h3>
                                  </div>
                                </div>
                                <div className="channel__user">
                                  <div>
                                    <h4 className="app__ellipsis app__font__size__0_8 app__color__grey app__cursor">
                                      <Skeleton width="150px" />
                                    </h4>
                                  </div>
                                </div>
                                <div className="channel__tag">
                                  <div className="channel__tag__1">
                                    <div className="channel__tag__2">
                                      <div className="channel__tag__3">
                                        <Skeleton width="200px" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="channel__down">
                                <Skeleton
                                  circle={true}
                                  height={30}
                                  width={20}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="app__order__1">
                            <div className="app__relative app__cursor">
                              <Skeleton width="290px" height="170px" />
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingForCategory;
