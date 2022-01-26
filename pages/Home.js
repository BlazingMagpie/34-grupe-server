class PageHome {
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
                        <img src="/img/logo.png" alt="Logo" class="logo">
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
                            <h1>Your Full-Funnel Growth Agency</h1>
                            <p>Capture and retrieve your lists across devices to help you stay organized at work, home, and on the go.</p>
                            <a href="#" class="btn">Get started</a>
                        </div>
                        <div class="right">
                            <img src="/img/hero.png" alt="Hero image">
                        </div>
                    </div>
                </section>

                <section class="container bg-gradient services">
                    <div class="row">
                        <h2>Services</h2>
                        <p>Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back into the development of the asset through its charitable foundation.</p>
                    </div>
                    <div class="row services-list">
                        <div class="service">
                            <i class="icon fa fa-globe"></i>
                            <h3 class="title">Paid Search and Social Management</h3>
                            <p class="description">Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back</p>
                        </div>
                        <div class="service">
                            <i class="icon fa fa-globe"></i>
                            <h3>Direct Response Content</h3>
                            <p>Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back</p>
                        </div>
                        <div class="service">
                            <i class="icon fa fa-globe"></i>
                            <h3>CRO and Retention Optimizations</h3>
                            <p>Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back</p>
                        </div>
                    </div>
                </section>

                <section class="container contacts">
                    <div class="row">
                        <div class="left">
                            <h2>Let’s scale your brand, together</h2>
                            <p>Get a start@oxo.com</p>
                            <img src="/img/contacts.png" alt="Contacts image">
                        </div>
                        <form class="right form">
                            <div class="form-row">
                                <label for="name">Name</label>
                                <input id="name" type="text" placeholder="Type name" required>
                            </div>
                            <div class="form-row">
                                <label for="phone">Phone</label>
                                <input id="phone" type="tel" placeholder="Type phone number" required>
                            </div>
                            <div class="form-row">
                                <label for="email">Email</label>
                                <input id="email" type="email" placeholder="Type email" required>
                            </div>
                            <div class="form-row">
                                <label for="message">How can we help?</label>
                                <textarea id="message" placeholder="Type message" required></textarea>
                            </div>
                            <div class="form-row">
                                <button type="submit" class="btn">Send message</button>
                            </div>
                        </form>
                    </div>
                </section>`
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

module.exports = PageHome;