import React from "react";
import Card from "../Card/Card";

const PostsSkeleton = () => {
  return (
    <React.Fragment>
      {Array(7)
        .fill(true)
        .map(() => {
          return <Card className="skeleton_card" />;
        })}
    </React.Fragment>
  );
};

export default PostsSkeleton;
