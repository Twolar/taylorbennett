import React from "react";
import { getSortedPostsData } from "@/lib/blogPosts";
import BlogPosts from "@/app/(components)/BlogPosts";

const BlogCategoryPage = ({ params }) => {
  const { category } = params;
  const allPostsData = getSortedPostsData(category);

  return (
    <div className="min-h-screen flex flex-col">
      <BlogPosts categories={[category]} posts={allPostsData} />
    </div>
  );
};

export default BlogCategoryPage;

// Generate static paths for all categories
export async function generateStaticParams() {
  const allPostsData = getSortedPostsData();
  const categories = [...new Set(allPostsData.map((post) => post.category))];

  return categories.map((category) => ({
    category: category.toLowerCase(),
  }));
}
