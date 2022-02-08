import { contactsSection } from "../components/contactsSection.js";
import { heroSection } from "../components/heroSection.js";
import { servicesSection } from "../components/servicesSection.js";
import { PageTemplate } from "../lib/Page.js";

class PageHome extends PageTemplate {
    constructor() {
        super();
        this.isHomePage = true;
    }

    async mainHTML() {
        return heroSection() + await servicesSection() + contactsSection();
    }
}

export { PageHome };