import React from "react";
import { getSortedPostsData } from "@/lib/blogPosts";
import Link from "next/link";

const BlogCategoryPage = ({ params }) => {
  const { category } = params;
  const allPostsData = getSortedPostsData();

  // TODO: Highlight hover for categories

  // Filter posts by category
  const filteredPosts = allPostsData.filter(
    (post) => post.category === category
  );

  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-5xl font-bold text-primary">Blog</h1>
      <div className="flex flex-wrap gap-4 mt-6">
        <p className="btn-sm bg-accent rounded px-3 py-1">{category}</p>
      </div>
      <div className="divider divider-accent"></div>
      {filteredPosts.map(({ id, date, title }) => (
        <div key={id}>
          <h2 className="text-l font-bold text-primary">
            <Link href={`/blog/${category}/${id}`}>{title}</Link>
          </h2>
          <p className="text-sm">
            <span className="italic">{date}</span>
          </p>
          <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        </div>
      ))}
    </div>
  );
};

export default BlogCategoryPage;

// Generate paths for categories at build time
export async function generateStaticParams() {
  const allPostsData = getSortedPostsData();
  const categories = [...new Set(allPostsData.map((post) => post.category))];

  return categories.map((category) => ({
    category,
  }));
}
