const PageTemplate = require("../lib/Page.js");

class Page404 extends PageTemplate {
    mainHTML() {
        return `<section class="container hero">
                    <div class="row">
                        <div class="left">
                            <h1>404</h1>
                            <p>Page not found</p>
                            <a href="/" class="btn">Go back home</a>
                        </div>
                        <div class="right">
                            <img src="/img/hero.png" alt="Hero image">
                        </div>
                    </div>
                </section>`;
    }
}

module.exports = Page404;