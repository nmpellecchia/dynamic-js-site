class Navbar {
    constructor(logo, brand, sections) {
        this.logo = logo,
        this.brand = brand,
        this.sections = sections
    };
};


const navTemplate = new Navbar('fas fa-dragon', 'Marduk', ['home', 'about', 'pricing', 'sign up']);


export { navTemplate };
