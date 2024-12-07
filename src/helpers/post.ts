import path from "path";
import fs from "fs";
import { ENCODING, POST_DIRECTORY } from "@/constants";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import matter from "gray-matter";
import { Value } from "vfile";

function getMdFileName(slug: string) {
  const mdFileName = slug.match(/^[0-9a-zA-Z_\-. ]+.(md|mdx)$/gim)
    ? slug
    : slug + ".md";
  return mdFileName;
}

type PostData = {
  title: string;
  category: string[];
  createdAt: string;
  tag: string[];
  slug: string;
  description: Value;
};

type Post = {
  html: Value;
  data: PostData;
};

export async function getPost(slug: string): Promise<Post> {
  const mdFileName = getMdFileName(slug);
  const postPath = path.join(POST_DIRECTORY, mdFileName);
  const postFileContent = fs.readFileSync(postPath, ENCODING);
  const matterResult = matter(postFileContent);
  const postHtml = await unified()
    .use(remarkParse) // Convert into markdown AST
    .use(remarkRehype, { allowDangerousHtml: true }) // Transform to HTML AST
    .use(rehypeStringify, { allowDangerousHtml: true }) // Convert AST into serialized HTML
    .process(matterResult.content);
  return {
    html: postHtml.value,
    data: matterResult.data as PostData,
  };
}

export async function getAllPostData() {
  const fileList = fs.readdirSync(POST_DIRECTORY);
  const allPostData: PostData[] = [];
  for (const fileName of fileList) {
    const slug = fileName.replaceAll(".md", "");
    const post = await getPost(slug);
    allPostData.push({
      ...post.data,
      slug,
      description: post.html,
    });
  }
  return allPostData;
}
