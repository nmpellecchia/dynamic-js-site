function generateNavbar(template) {
    const navbar = document.createElement('nav');
    const optionList = document.createElement('ul');

    for(let i=0; i < template.sections.length; i++) {
    const item = document.createElement('li');
    item.classList.add(`nav-section`);
    item.innerHTML = `<a href="#${deleteSpaces(template.sections[i])}">${template.sections[i]}</a>`;
    optionList.appendChild(item);
    };

    optionList.classList.add('nav-section-list')
    navbar.classList.add('navbar')
    navbar.innerHTML = `
    <div class="brand-name">
        <i class="${template.logo}"></i>
        <h1>${template.brand}</h1> 
    </div>   
    <span class="hamburger-icon">≡</span>
    ${optionList.outerHTML}
    `;

    document.body.appendChild(navbar)

};

function deleteSpaces(sentence) {
    const noSpaces = sentence.replace(/ /g,"-");
    return noSpaces;
};

export { generateNavbar };
