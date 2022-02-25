import { PageTemplate } from "../lib/Page.js";
import { folder } from '../lib/folder.js';
import { file } from '../lib/file.js';
import { utils } from "../lib/utils.js";

class PageBlog extends PageTemplate {
    /**
     * Sabloninio puslapio konstruktorius.
     * @constructor
     * @param {object} data Duomenu objektas
     */
    constructor(data) {
        super(data);
        this.pageCSSfileName = 'blog';
    }

    async getBlogPostsData() {
        try {
            const content = [];
            const fileNames = await folder.read('/data/blog-posts');
            for (const fileName of fileNames) {
                const fileContent = await file.read('/data/blog-posts', fileName);
                const contentObj = utils.parseJSONtoObject(fileContent);
                if (contentObj) {
                    content.push(contentObj);
                }
            }
            return content;
        } catch (error) {
            return [];
        }
    }

    emptyBlogHTML() {
        return '<div class="row empty-list">Seems like the blog is empty. Come back later, please! 💖</div>';
    }

    isValidPost(post) {
        return true;
    }

    blogPostHTML(post) {
        const maxPostDescriptionLength = 75;
        let text = post.content;
        if (text.length > maxPostDescriptionLength) {
            text = text.slice(0, maxPostDescriptionLength) + '...';
        }

        return `<article class="post">
                    <img src="/img/blog.jpg" alt="Blog image" class="post-img">
                    <h2 class="post-title">${post.title}</h2>
                    <p class="post-description">${text}</p>
                    <a href="/blog/${post.slug}/" class="read-more">Read more<i class="icon fa fa-angle-right"></i></a>
                </article>`;
    }

    blogListHTML(list) {
        let HTML = '';

        for (const item of list) {
            if (!this.isValidPost(item)) {
                continue;
            }
            HTML += this.blogPostHTML(item);
        }

        return `<div class="row list">${HTML}</div>
                <div class="row">
                    BLOG PAGINATION
                </div>`;
    }

    async mainHTML() {
        const blogList = await this.getBlogPostsData();
        const contentHTML = blogList.length ? this.blogListHTML(blogList) : this.emptyBlogHTML();

        return `<section class="container blog-list">
                    <h1 class="row title">My blog</h1>
                    ${contentHTML}
                </section>`;
    }
}

export { PageBlog };