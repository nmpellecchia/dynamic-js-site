class Footer{
    constructor(about, contact, creator){
        this.aboutBrand = about;
        this.brandContact = contact;
        this.creatorContact = creator;
    };
};

const companyContact = {
    facebook: '#',
    pinterest: '#',
    twitter: '#',
    youtube: '#',
    google: '#',
    telephone: '#'
};

const creatorContact = {
    icon: true,
    google: '#',
    codepen: '#',
    facebook: '#',
    linkedin: '#'
};

const footerTemplate = new Footer(
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam fugiat harum nam incidunt illo error natus! Doloremque, distinctio harum. Fugiat est natus reprehenderit sapiente voluptatum similique sunt vero quibusdam assumenda!',
    companyContact,
    creatorContact,
);


export { footerTemplate };