import { PageTemplate } from "../lib/Page.js";
import { folder } from '../lib/folder.js';
import { file } from '../lib/file.js';
import { utils } from "../lib/utils.js";

class PageBlogPost extends PageTemplate {
    /**
     * Sabloninio puslapio konstruktorius.
     * @constructor
     * @param {object} data Duomenu objektas
     */
    constructor(data) {
        super(data);
        this.pageCSSfileName = 'blog-post';
    }

    async getBlogPostData() {
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

    badPostHTML() {
        return `<section class="container blog-inner">
                    <h1 class="row title">500</h1>
                    <p class="row">Something's wrong with server. Please, come back later.</p>
                </section>`;
    }

    correctPostHTML() {
        return `<section class="container blog-inner">
                    <h1 class="row title">Blog post title</h1>
                    <p class="row">Post content...</p>
                    <footer class="row">Author</footer>
                </section>`;
    }

    isValidPost(post) {
        return true;
    }

    async mainHTML() {
        const postData = await this.getBlogPostData();
        if (this.isValidPost(postData)) {
            return this.correctPostHTML(postData);
        } else {
            return this.badPostHTML();
        }
    }
}

export { PageBlogPost };