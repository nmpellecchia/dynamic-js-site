function generateSections(sectionTemplates) {
    const sectionsWrapper = document.createElement('main');
    sectionsWrapper.classList.add('sections-wrapper');

    for(let i = 0; i < sectionTemplates.length; i++) {
        const section = document.createElement('div');
        section.classList.add('section', sectionTemplates[i].bgColor);
        section.id = sectionTemplates[i].className;

        section.innerHTML = `
            <div class="section-content">
                <h2>${sectionTemplates[i].title}</h2>
                <h4>${sectionTemplates[i].headline}</h4>
                <p>${sectionTemplates[i].desc}</p>
                ${sectionTemplates[i].btn ? `<button>${sectionTemplates[i].btn}</button>` : ''}
            </div>
            <img src="${sectionTemplates[i].img}" alt="${sectionTemplates[i].imgAlt}" class="${sectionTemplates[i].imgPosition}" height="550px" width="550px">
        `;
        sectionsWrapper.appendChild(section);
        document.body.appendChild(sectionsWrapper);
    };
};


export { generateSections };
