import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "blogPosts");

// Fetch posts and sort by date
export function getSortedPostsData(category) {
  let allPostsData = [];

  if (category) {
    var categoryPosts = fetchPostsFromCategoryDir(category);
    allPostsData = [...allPostsData, ...categoryPosts];
  } else {
    const categories = fs.readdirSync(postsDirectory);
    categories.forEach((category) => {
      var categoryPosts = fetchPostsFromCategoryDir(category);
      allPostsData = [...allPostsData, ...categoryPosts];
    });
  }

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

function fetchPostsFromCategoryDir(category) {
  const categoryDir = path.join(postsDirectory, category);
  const posts = [];

  if (fs.statSync(categoryDir).isDirectory()) {
    const fileNames = fs.readdirSync(categoryDir);

    fileNames.forEach((fileName) => {
      const match = fileName.match(/^(\d{4}-\d{2}-\d{2})_(.+)\.md$/); // Match date and ID
      if (match) {
        const [_, date, id] = match; // Extract date and id
        const fullPath = path.join(categoryDir, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);

        // Ensure the title exists in the frontmatter
        const title = matterResult.data.title || `Untitled Post (${id})`;

        posts.push({
          id,
          date,
          category,
          title,
          description: matterResult.data.description
        });
      }
    });
  }

  return posts;
}

export function getPostData(category, id) {
  const categoryDir = path.join(postsDirectory, category);

  // Check if the directory exists before accessing it
  if (!fs.existsSync(categoryDir) || !fs.statSync(categoryDir).isDirectory()) {
    console.error("Category does not exist");
    return getNotFoundPost();
  }

  const fileName = fs
    .readdirSync(categoryDir)
    .find((file) => file.includes(`_${id}.md`));

  if (!fileName) {
    console.error("Post does not exist in category");
    return getNotFoundPost();
  }

  const match = fileName.match(/^(\d{4}-\d{2}-\d{2})_(.+)\.md$/); // Extract date and ID
  if (!match) {
    console.error("Post does not exist");
    return getNotFoundPost();
  }

  const [_, date] = match; // Extract the date
  const fullPath = path.join(categoryDir, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  // Convert Markdown content to HTML
  const processedContent = remark().use(html).processSync(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    category,
    date, // Use date extracted from file name
    contentHtml,
    title: matterResult.data.title || `Untitled Post (${id})`, // Use title or fallback
    description: matterResult.data.description,
  };
}

function getNotFoundPost() {
  return {
    contentHtml: null,
    title: "404",
    description: "Sorry, it appears the post your looking for does not exist",
  };
}
