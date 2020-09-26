import React from "react";
import Skeleton from "react-loading-skeleton";
const SlashCategoryGamesIdLoading = () => {
  return (
    <div style={{ marginLeft: 15 }} className="game__card app-pd-15">
      <div className="card__maxWidth__margin app__tower__gutter">
        <div className="app-flex">
          <div>
            <Skeleton width={180} height={240} />
          </div>
          <div style={{ marginTop: 50, marginLeft: 40 }}>
            <Skeleton width={150} height={40} />
            <div style={{ marginTop: 5, marginLeft: 0 }}>
              <Skeleton width={250} height={20} />
            </div>

            <div style={{ marginTop: 5, marginLeft: 0 }}>
              <Skeleton width={90} height={30} />
            </div>
          </div>
        </div>
        <h3 style={{ marginTop: 30 }}>
          <Skeleton height={28} width={250} />
        </h3>
        <div className="app__relative">
          <div className="card__display__flex__wrap">
            {Array(20)
              .fill()
              .map((e, i) => {
                return (
                  <div key={i} className="app__tower__300 app-pd-r-02">
                    <div className="app__card__height">
                      <div className="app__card__padding_bottom app__card__height">
                        <article className="card__display__flex__direction">
                          <div className="app__width app__order__2 app__margin__top">
                            <div className="app__flex__nowrap app__flex">
                              <div className="app__min__width__0 app__order__2 app__flex__shrink__1 app__flex__grow__1 app__width">
                                <div className="app__margin__bottom">
                                  <div className="channel__font_1">
                                    <div className="" style={{marginTop:8}}>
                                      <Skeleton width="270px" height="20px" />
                                    </div>
                                  </div>
                                </div>
                                <div className="channel__user">
                                  <div>
                                    <div
                                      style={{ marginTop: 5 }}
                                      className="app__ellipsis app__font__size__0_8 app__color__grey app__cursor"
                                    >
                                      <Skeleton width="150px" />
                                    </div>
                                  </div>
                                </div>
                                <div className="channel__tag">
                                  <div className="channel__tag__1">
                                    <div className="channel__tag__2">
                                      <div
                                        className="channel__tag__3"
                                        style={{ marginTop: -10 }}
                                      >
                                        <Skeleton width="150px" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
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

export default SlashCategoryGamesIdLoading;
