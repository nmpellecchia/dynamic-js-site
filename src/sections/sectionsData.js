class Section {
    constructor(title, headline, desc, img, imgAlt, imgPosition, btn, bgColor, className) {
        this.title = title,
        this.headline = headline,
        this.desc = desc,
        this.img = img,
        this.imgAlt = imgAlt,
        this.imgPosition = imgPosition,
        this.btn = btn,
        this.bgColor = bgColor,
        this.className = className
    };
};

const sectionTemplate1 = new Section(
    'Cool and Innovative',
    'Fast & simple to use',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa esse voluptatem, consequatur quas atque reiciendis. Odio nam vel harum similique a, maxime assumenda id modi in odit accusantium quibusdam ex.Fugit alias ex vel omnis libero vitae numquam enim, veritatis aliquam possimus quia dignissimos officiis repudiandae eligendi rem voluptate doloremque voluptatum eaque obcaecati sequi laudantium! Veritatis quas unde minima aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa esse voluptatem, consequatur quas atque reiciendis. Odio nam vel harum similique a, maxime assumenda id modi in odit accusantium quibusdam ex.Fugit alias ex vel omnis libero vitae numquam enim, veritatis aliquam possimus quia dignissimos officiis repudiandae eligendi rem voluptate doloremque voluptatum eaque obcaecati sequi laudantium! Veritatis quas unde minima aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui blanditiis, eveniet voluptate omnis dolore asperiores alias, vero officiis illo saepe reprehenderit commodi placeat quasi nobis eligendi consequatur facilis soluta iure?',
    '../../images/delesign-globalization.svg',
    'globe',
    'right',
    'Start using it now',
    'dark',
    'home'
);

const sectionTemplate2 = new Section(
    'Incredibly Realiable',
    '6 months warranty',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa esse voluptatem, consequatur quas atque reiciendis. Odio nam vel harum similique a, maxime assumenda id modi in odit accusantium quibusdam ex.Fugit alias ex vel omnis libero vitae numquam enim, veritatis aliquam possimus quia dignissimos officiis repudiandae eligendi rem voluptate doloremque voluptatum eaque obcaecati sequi laudantium! Veritatis quas unde minima aliquid.',
    '../../images/delesign-business-angel.svg',
    'safe',
    'left',
    'Start building your future',
    'light',
    'about'
);

const sectionTemplate3 = new Section(
    '100% free',
    'Start now, without spending a single penny',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa esse voluptatem, consequatur quas atque reiciendis. Odio nam vel harum similique a, maxime assumenda id modi in odit accusantium quibusdam ex.Fugit alias ex vel omnis libero vitae numquam enim, veritatis aliquam possimus quia dignissimos officiis repudiandae eligendi rem voluptate doloremque voluptatum eaque obcaecati sequi laudantium! Veritatis quas unde minima aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa esse voluptatem, consequatur quas atque reiciendis. Odio nam vel harum similique a, maxime assumenda id modi in odit accusantium quibusdam ex.Fugit alias ex vel omnis libero vitae numquam enim, veritatis aliquam possimus quia dignissimos officiis repudiandae eligendi rem voluptate doloremque voluptatum eaque obcaecati sequi laudantium! Veritatis quas unde minima aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui blanditiis, eveniet voluptate omnis dolore asperiores alias, vero officiis illo saepe reprehenderit commodi placeat quasi nobis eligendi consequatur facilis soluta iure?',
    '../../images/delesign-money.svg',
    'money',
    'right',
    '',
    'dark',
    'pricing'
);

export const sectionTemplates = [sectionTemplate1, sectionTemplate2, sectionTemplate3];
