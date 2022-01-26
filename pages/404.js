class Page404 {
    constructor() {

    }

    headHTML() {
        return `<head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Server</title>
                    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
                    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
                    <link rel="manifest" href="/favicon/site.webmanifest">
                    <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5">
                    <meta name="msapplication-TileColor" content="#da532c">
                    <meta name="theme-color" content="#ffffff">
                    <link rel="stylesheet" href="/css/pages/home.css">
                </head>`;
    }

    headerHTML() {
        return `<header class="container header">
                    <div class="row">
                        <a href="/">
                            <img src="/img/logo.png" alt="Logo" class="logo">
                        </a>
                        <nav>
                            <a href="/blog/">Blog</a>
                            <a href="/register/">Register</a>
                            <a href="/login/">Log in</a>
                        </nav>
                    </div>
                </header>`;
    }

    footerHTML() {
        return `<footer class="container">
                    <div class="row">
                        &copy; Copyrights 2020-2022 Oxo All rights reserved.
                    </div>
                </footer>`;
    }

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

    render() {
        return `<!DOCTYPE html>
            <html lang="en">
            ${this.headHTML()}
            <body>
                ${this.headerHTML()}
                <main>
                    ${this.mainHTML()}
                </main>
                ${this.footerHTML()}
                <script src="/js/pages/home.js" type="module" defer></script>
            </body>
            </html>`;
    }
}

module.exports = Page404;