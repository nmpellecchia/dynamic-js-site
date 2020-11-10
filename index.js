import { navTemplate } from './src/navbar/navbarData.js';
import { generateNavbar } from './src/navbar/navbar.js';
import { generateSections } from './src/sections/sections.js';
import { sectionTemplates } from './src/sections/sectionsData.js'
import { generateSignUp } from './src/signUp/signUp.js'
import { footerTemplate } from './src/footer/footerData.js';
import { generateFooter } from './src/footer/footer.js';



function Initialize() {
    /* generateNavbar(navTemplate);
    generateSections(sectionTemplates)
    generateFooter(footerTemplate); */
    generateSignUp();
};

Initialize();
