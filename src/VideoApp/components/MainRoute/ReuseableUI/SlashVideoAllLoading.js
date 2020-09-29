import React from "react";

import Skeleton from "react-loading-skeleton";

const SlashVideoAllLoading = (props) => {
  return (
    <>
      {" "}
      <div
        style={{
          backgroundColor: "#fff",
          width: "85%",
          height: "100%",
        }}
        className="app-absolute"
      >
        <div
          className="app-mg-x-2 app-flex app-flex-column"
          style={{
            height: "30%",
            paddingTop: "1.5rem",
            position: "sticky",
            zIndex: 2,
          }}
        >
          <div className="app-flex">
            <div className="app-mg-t-03">
              <div className="">
                <div className="app-relative app-flex">
                  <div>
                    <figure className="tw-avatar--size-50">
                      <div
                        style={{
                          width: 70,
                          height: 70,
                          borderRadius: 5000,
                        }}
                      >
                        <Skeleton width={60} height={75} />
                      </div>
                    </figure>
                  </div>
                  <div style={{ marginLeft: 3, marginTop: 20 }}>
                    <Skeleton width={150} height={20} />
                    <div>
                      <Skeleton width={250} height={30} />
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "100%", marginTop: 20 }} className="app-mg-x-2">
          {Array(20)
            .fill()
            .map((e, i) => {
              return (
                <React.Fragment key={i}>
                  <Skeleton width={250} height={150} />{" "}
                </React.Fragment>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default SlashVideoAllLoading;
