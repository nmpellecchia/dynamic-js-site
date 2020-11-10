function generateFooter(template) {
    const footer = document.createElement('footer');

    footer.innerHTML = `
        <div class="about-us">
            <h3>about us</h3>
            <p>${template.aboutBrand}</p>
        </div>
        <div class="company-info">
          <h3>contact</h3>
          ${createContactList(template.brandContact)}  
        </div>
        <div class="creator-info">
            <h3>contact the creator</h3>
            ${createContactList(template.creatorContact)}
        </div>
        <a class="credits"  href="https://icons8.com">All images used are property of Icons8. Click here to go to their page.</a>
    `;

    document.body.appendChild(footer);
};

function createContactList(info) {
    const list = document.createElement('ul');
    list.classList.add('social-list');

    for(const key in info) {
        const item = document.createElement('li');
        const link = document.createElement('a');
        item.classList.add('social-media');

        link.href = info[key];
        link.target = '_blank';
        link.textContent = key;

        if(info.icon) {
            if (typeof info[key] != 'string') continue;
            link.classList.add('fab', `fa-${key}`);
            link.textContent = '';
        };

        item.appendChild(link);
        list.appendChild(item);
    };

    return list.outerHTML;
};

export { generateFooter };
