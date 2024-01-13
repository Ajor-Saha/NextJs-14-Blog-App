import React from "react";
import Card from "./Card";
import { Post } from "@/lib/models";
import { getPosts } from "@/lib/data";

const BlogPost = async () => {
  const posts = await getPosts();

  const renderedPosts = posts.slice(0,6).map((post) => (
    <Card key={post.id} post={post} />
  ))
  return (
    <div>
      <h1 className="text-left text-xl">Popular Posts</h1>
      <span className="border-2 float-left w-32"></span>
      <div className="flex flex-wrap gap-7 w-full justify-center lg:justify-between">
        {renderedPosts}
      </div>
    </div>
  );
};

export default BlogPost;
