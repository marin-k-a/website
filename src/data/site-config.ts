export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Маринка пише',
    subtitle: 'Власний куточок в інтернеті',
    description: 'Сайт та блог Марини Зайцевої',
/*    image: {
        src: '',
        alt: ''
    },*/
    headerNavLinks: [
        {
            text: 'Додому',
            href: '/'
        },
        {
            text: 'Блог',
            href: '/blog'
        },
        {
            text: 'Подкаст',
            href: 'https://omw.marin-k-a.com'
        },
        {
            text: 'Вірші та замальовки',
            href: 'https://ink.marin-k-a.com'
        },
/*      {
            text: 'Теги',
            href: '/tags'
        }
*/
        {
            text: 'Про мене',
            href: '/about'
        }
    ],
    footerNavLinks: [
/*        {
            text: 'About',
            href: '/about'
        },
*/
    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://instagram.com/marin_k_a'
        }
    ],
/*     hero: {
   title: '',
        text: "Привіт 👋 Мене звати Марина Зайцева.  "
            image: {
            src: '',
            alt: ''
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]

    },*/
 /*    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    }, 
 */
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
