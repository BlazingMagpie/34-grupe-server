const contactsSection = require("../components/contactsSection.js");
const heroSection = require("../components/heroSection.js");
const servicesSection = require("../components/servicesSection.js");
const PageTemplate = require("../lib/Page.js");

class PageHome extends PageTemplate {
    constructor() {
        super();
        this.isHomePage = true;
    }

    async mainHTML() {
        return heroSection() + await servicesSection() + contactsSection();
    }
}

module.exports = PageHome;