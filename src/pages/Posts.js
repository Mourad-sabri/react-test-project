import React from "react";
import useSWR from "swr";

import Card from "../components/Card/Card";
import PostsSkeleton from "../components/PostsSkeleton/PostsSkeleton";
import { fetcher } from "../utils/fetcher";

const Posts = () => {
  const { data, error } = useSWR("/posts", fetcher);

  if (error) {
    return <div>Oppes !! Something went wrong please try again</div>;
  }

  if (!data) {
    return (
      <div className="posts">
        <PostsSkeleton />
      </div>
    );
  } else {
    return (
      <div className="posts">
        {data.map((post) => {
          return <Card key={post.id} title={post.title} content={post.body} />;
        })}
      </div>
    );
  }
};

export default Posts;
