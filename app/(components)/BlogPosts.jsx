import React from "react";
import Link from "next/link";

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

      {posts.map(({ id, date, title, category }) => (
        <div key={id}>
          <h2 className="text-l font-bold text-primary">
            <Link href={`/blog/${category}/${id}`}>{title}</Link>
          </h2>
          <p className="text-sm italic mt-1">
            <span>{date}</span>
            <span>{category && ` | ${category}`}</span>
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
