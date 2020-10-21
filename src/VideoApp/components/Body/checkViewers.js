import React from "react";
import { Link } from "react-router-dom";
export const checkViewers = (views) => {
  if (views <= 999) {
    return <>{`${views} Viewers`}</>;
  } else if (views < 999999) {
    return (
      <>{`${
        Math.sign(views) * (Math.abs(views) / 1000).toFixed(1)
      }K Viewers`}</>
    );
  } else if (views <= 9999999) {
    return (
      <>{`${
        Math.sign(views) * (Math.abs(views) / 1000000).toFixed(1)
      }M Viewers`}</>
    );
  }
};
export const checkFollowers = (views) => {
  if (views <= 999) {
    return <>{`${views} Followers`}</>;
  } else if (views < 999999) {
    return (
      <>{`${
        Math.sign(views) * (Math.abs(views) / 1000).toFixed(1)
      }K Followers`}</>
    );
  } else if (views <= 9999999999) {
    return (
      <>{`${
        Math.sign(views) * (Math.abs(views) / 10000000).toFixed(1)
      }M Followers`}</>
    );
  }
};
export const checkTags = (streams, i) => {
  return streams.localization_names.map((e, i) => {
    return (
      <Link
        className="channel__tag__anchor"
        key={i}
        style={{ marginLeft: 2, maxWidth: 90 }}
        to={`/category/all/tags/${streams.tag_ids[i]}`}
      >
        {e}
      </Link>
    );
  });
};
