import React from "react";
import { getPostData, getSortedPostsData } from "@/lib/blogPosts";
import Link from "next/link";

const BlogPostPage = ({ params }) => {
  const { category, postId } = params;
  const postData = getPostData(category, postId);

  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold text-primary">{postData.title}</h1>
      <p className="mt-2 italic text-sm">{postData.date}</p>
      <div className="flex flex-wrap gap-4 mt-3">
        <Link
          key={category}
          href={`/blog/${category}`}
          className="btn-sm bg-accent rounded px-3 py-1"
        >
          {category}
        </Link>
      </div>
      <div className="divider divider-accent"></div>
      {postData.description && (
        <>
          <p className="text-sm">
            <span>{postData.description}</span>
          </p>
          <hr className="mt-6 border-neutral-100 dark:border-neutral-800" />
        </>
      )}
      <div className="prose">
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </div>
  );
};

export default BlogPostPage;

// Generate static paths for all posts
export async function generateStaticParams() {
  const allPostsData = getSortedPostsData();

  return allPostsData.map((post) => ({
    category: post.category.toLowerCase(),
    postId: post.id.toString(),
  }));
}
