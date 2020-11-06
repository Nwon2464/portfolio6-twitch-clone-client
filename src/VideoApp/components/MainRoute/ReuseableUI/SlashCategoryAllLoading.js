import React from "react";

import Skeleton from "react-loading-skeleton";
const SlashCategoryAllLoading = () => {
  return (
    <>
      {Array(20)
        .fill()
        .map((e, i) => {
          return (
            <div
              key={i}
              style={{ width: "15rem" }}
              className="app-flex app-max-width-5 app-flex-gutter-03 app-flex-grow-1"
            >
              <div className="app-relative app-mg-b-1">
                <div>
                  <div className="app-pd-b-1 app-flex app-flex-column">
                    <div className="app-flex-order-1 app-relative">
                      <div className="app-flex app-flex-column app-flex-nowrap">
                        <Skeleton height={310} width={208} />
                        <div style={{ marginTop: 5 }} className="app-relative">
                          <Skeleton width={100} height={15} />
                        </div>
                        <Skeleton width={50} height={15} />
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>{" "}
            </div>
          );
        })}
    </>
  );
};

export default SlashCategoryAllLoading;
