import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const contentDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    category: string;
    author: string;
    readTime: string;
    featured: boolean;
    image?: string;
    keywords: string[];
    content?: string;
}

export interface BlogPostWithContent extends BlogPost {
    content: string;
}

// Get all blog post slugs
export function getAllPostSlugs(): string[] {
    if (!fs.existsSync(contentDirectory)) {
        return [];
    }

    const files = fs.readdirSync(contentDirectory);
    return files
        .filter(file => file.endsWith('.mdx'))
        .map(file => file.replace(/\.mdx$/, ''));
}

// Get blog post metadata by slug
export function getPostBySlug(slug: string): BlogPost | null {
    try {
        const fullPath = path.join(contentDirectory, `${slug}.mdx`);

        if (!fs.existsSync(fullPath)) {
            return null;
        }

        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        // Calculate reading time from content
        const stats = readingTime(content);

        return {
            slug,
            title: data.title || '',
            description: data.description || '',
            date: data.date || '',
            category: data.category || 'Uncategorized',
            author: data.author || 'Quanta Team',
            readTime: data.readTime || stats.text,
            featured: data.featured || false,
            image: data.image,
            keywords: data.keywords || [],
        };
    } catch (error) {
        console.error(`Error reading post ${slug}:`, error);
        return null;
    }
}

// Get all blog posts metadata
export function getAllPosts(): BlogPost[] {
    const slugs = getAllPostSlugs();
    const posts = slugs
        .map(slug => getPostBySlug(slug))
        .filter((post): post is BlogPost => post !== null)
        .sort((a, b) => {
            // Sort by date (newest first)
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });

    return posts;
}

// Get posts by category
export function getPostsByCategory(category: string): BlogPost[] {
    const allPosts = getAllPosts();

    if (category === 'All') {
        return allPosts;
    }

    return allPosts.filter(post => post.category === category);
}

// Get featured posts
export function getFeaturedPosts(): BlogPost[] {
    const allPosts = getAllPosts();
    return allPosts.filter(post => post.featured);
}

// Get post content with raw markdown
export function getPostContent(slug: string): BlogPostWithContent | null {
    try {
        const fullPath = path.join(contentDirectory, `${slug}.mdx`);

        if (!fs.existsSync(fullPath)) {
            return null;
        }

        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content: rawContent } = matter(fileContents);

        const stats = readingTime(rawContent);

        return {
            slug,
            title: data.title || '',
            description: data.description || '',
            date: data.date || '',
            category: data.category || 'Uncategorized',
            author: data.author || 'Quanta Team',
            readTime: data.readTime || stats.text,
            featured: data.featured || false,
            image: data.image,
            keywords: data.keywords || [],
            content: rawContent,
        };
    } catch (error) {
        console.error(`Error reading post ${slug}:`, error);
        return null;
    }
}

// Get related posts (same category, excluding current post)
export function getRelatedPosts(slug: string, limit: number = 3): BlogPost[] {
    const currentPost = getPostBySlug(slug);

    if (!currentPost) {
        return [];
    }

    const allPosts = getAllPosts();
    const relatedPosts = allPosts
        .filter(post => post.slug !== slug && post.category === currentPost.category)
        .slice(0, limit);

    // If not enough related posts in same category, fill with other posts
    if (relatedPosts.length < limit) {
        const otherPosts = allPosts
            .filter(post => post.slug !== slug && post.category !== currentPost.category)
            .slice(0, limit - relatedPosts.length);

        relatedPosts.push(...otherPosts);
    }

    return relatedPosts;
}

// Get all unique categories
export function getAllCategories(): string[] {
    const allPosts = getAllPosts();
    const categories = new Set(allPosts.map(post => post.category));
    return ['All', ...Array.from(categories)];
}
