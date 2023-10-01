// app/blog/page.js

import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import path from "path";

async function getAllBlogs() {
  const files = fs.readdirSync(path.join("data"));
  const blogs = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const fileData = fs.readFileSync(path.join("data", fileName), "utf-8");
    const { data } = matter(fileData);
    return {
      frontmatter: data,
      slug: slug,
    };
  });
  const orderdBlogs = blogs.sort((a, b) => {
    return b.frontmatter.id - a.frontmatter.id;
  });
  return {
    blogs: orderdBlogs,
  };
}

const Blog = async () => {
  const { blogs } = await getAllBlogs();
  console.log(blogs);
  return (
    <>
      <div>
        <div>
          <h1>ブログ</h1>
          <p>日常をお届けするぜ</p>
          {blogs.map((blog, index) => (
            <div key={index}>
              <div>
                <h2>{blog.frontmatter.title}</h2>
                <p>{blog.frontmatter.excerpt}</p>
                <p>{blog.frontmatter.date}</p>
                <Link href={`/blog/${blog.slug}`}>read more</Link>
              </div>
              <div>
                <Image
                  src={blog.frontmatter.image}
                  alt="card-image"
                  height={300}
                  width={1000}
                  quality={90}
                  priority={true}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
