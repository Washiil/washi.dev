import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX, CompileMDXResult } from 'next-mdx-remote/rsc';
import { ProjectMetadata } from '@/types/project';
// import remarkGfm from 'remark-gfm'
// import rehypeSlug from 'rehype-slug'

// Will refactor this with the blog.ts file to reduce redundancy

function decodeSlugToFilePath(encodedSlug: string): string {
  try {
    return decodeURIComponent(encodedSlug);
  } catch (error) {
    // Handle invalid encoded sequences (optional)
    console.error('Error decoding slug:', error);
    return encodedSlug; // Or return a default/error string
  }
}

const rootDirectory = path.join(process.cwd(), 'content/projects');

export async function getProjectBySlug(slug: string): Promise<[ProjectMetadata, CompileMDXResult]> {
  slug = decodeSlugToFilePath(slug);
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

  const { data, content } = matter(fileContent);

  const compiledContent: CompileMDXResult = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [
          // remarkGfm,  // Add this for basic markdown support
        ],
        rehypePlugins: [
          // rehypeSlug,  // Add this for heading IDs
        ],
      },
    },
  });

  const metadata: ProjectMetadata = {
    slug: realSlug,
    title: data.title,
    description: data.description,
    repository: data.repository,
    url: data.url,
    tags: data.tags || [],
    priority: data.priority,
  };

  return [metadata, compiledContent];
}

export async function getAllProjectSlugs() {
  const files = fs.readdirSync(rootDirectory);
  return files.map((file) => ({
    params: {
      slug: file.replace(/\.mdx$/, ''),
    },
  }));
}

export async function getAllProjects(): Promise<Omit<ProjectMetadata, 'content'>[]> {
  const files = fs.readdirSync(rootDirectory);
  const projects = await Promise.all(
    files.map(async (file) => {
      const [metadata] = await getProjectBySlug(file);
      return metadata;
    }),
  );

  return projects
    .sort((a, b) => {
      return a.priority - b.priority
    });
}
