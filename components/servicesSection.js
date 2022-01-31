const file = require("../lib/file.js");
const folder = require("../lib/folder.js");
const utils = require("../lib/utils.js");

async function servicesSection() {
    function isValid(service) {
        if (typeof service !== 'object'
            || service === null
            || Array.isArray(service)
            || Object.keys(service).length !== 3
            || !service.icon
            || typeof service.icon !== 'string'
            || service.icon.length > 20
            || !service.title
            || typeof service.title !== 'string'
            || service.title.length > 40
            || !service.description
            || typeof service.description !== 'string'
            || service.description.length > 200) {
            return false;
        }
        return true;
    }

    const services = [];
    // perskaitome kokie failai yra: /data/services folderyje
    const filesList = await folder.read('data/services');
    // gauname sarasa paslaugu JSON failu
    for (const fileName of filesList) {
        if (utils.fileExtension(fileName) === 'json') {
            const fileContent = await file.read('data/services', fileName);
            // visus JSON failus issiparsinti, t.y. konvertuoti i normalu JS objekta
            const obj = utils.parseJSONtoObject(fileContent);
            // atfiltruoti ir pasilikti tik validzias ir aktyvias paslaugas, t.y. ju objektus
            if (obj && isValid(obj)) {
                services.push(obj);
            }
        }
    }
    console.log(services);
    // su ciklu sukonstruoti galutini paslaugu HTML
    // ta HTML istatyti i reikiama vieta return string'e

    return `<section class="container bg-gradient services">
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
                        <i class="icon fa fa-plane"></i>
                        <h3 class="title">Direct Response Content</h3>
                        <p class="description">Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back</p>
                    </div>
                    <div class="service">
                        <i class="icon fa fa-bath"></i>
                        <h3 class="title">CRO and Retention Optimizations</h3>
                        <p class="description">Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back</p>
                    </div>
                </div>
            </section>`;
}

module.exports = servicesSection;