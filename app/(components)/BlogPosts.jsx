import React from "react";
import Link from "next/link";
import { truncateText } from '@/app/(util)/utilStrings'

const BlogPosts = ({ categories, posts }) => {
  return (
    <>
      <h1 className="text-5xl font-bold text-primary">Blog</h1>
      <div className="flex flex-wrap gap-4 mt-6">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/blog/${category}`}
            className="btn-sm bg-accent rounded px-3 py-1"
          >
            {category}
          </Link>
        ))}
      </div>
      <div className="divider divider-accent"></div>

      {posts.map((post) => (
        <div key={post.id}>
          <h2 className="text-lg font-bold text-primary">
            <Link href={`/blog/${post.category}/${post.id}`}>{post.title}</Link>
          </h2>

          {post.description && <p className="text-sm">{truncateText(post.description, 100)}</p>}
          <p className="text-sm italic mt-1">
            <span>{post.date}</span>
            <span>{post.category && ` | ${post.category}`}</span>
          </p>
          <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        </div>
      ))}

      {/* No Posts */}
      {posts.length === 0 && (
        <p className="text-center text-gray-500">No posts available.</p>
      )}
    </>
  );
};

export default BlogPosts;
