import React from "react";
import { getPostData, getSortedPostsData } from "@/lib/blogPosts";

const BlogPostPage = ({ params }) => {
  const { category, postId } = params;
  const postData = getPostData(category, postId);

  // TODO: Add category buttons, with current highlighted and have hover highlighting

  // TODO: Refactor repitition into components...

  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold text-primary">{postData.title}</h1>
      <p className="mt-5 text-sm">
        <span>{category && `${category} | `}</span>
        <span className="italic">{postData.date}</span>
      </p>
      <div className="divider divider-accent"></div>
      <div className="prose">
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </div>
  );
};

export default BlogPostPage;

// Generate paths for all posts
export async function generateStaticParams() {
  const allPostsData = getSortedPostsData();

  return allPostsData.map((post) => ({
    category: post.category,
    postId: post.id,
  }));
}
