import React from "react";
import { getSortedPostsData } from "@/lib/blogPosts";
import BlogPosts from "@/app/(components)/BlogPosts";

const BlogIndex = () => {
  const allPosts = getSortedPostsData();

  const categories = [
    ...new Set(allPosts.map((post) => post.category).filter(Boolean)),
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <BlogPosts categories={categories} posts={allPosts} />
    </div>
  );
};

export default BlogIndex;
