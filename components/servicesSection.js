const folder = require("../lib/folder.js");

async function servicesSection() {
    // perskaitome kokie failai yra: /data/services folderyje
    const files = await folder.read('data/services');
    console.log(files);

    // gauname sarasa paslaugu JSON failu
    // visus JSON failus issiparsinti, t.y. konvertuoti i normalu JS objekta
    // atfiltruoti ir pasilikti tik validzias ir aktyvias paslaugas, t.y. ju objektus
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
            </section>`;
}

module.exports = servicesSection;