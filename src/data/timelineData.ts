import firstImage from '../assets/images/1782947740639.jpg';
import secondImage from '../assets/images/1782947740627.jpg';
import firstVideo from '../assets/videos/936e9081-74bc-4018-8f74-4319a2856c4e.mp4';

export interface TimelineMoment {
    id: string;
    title: string;
    image?: string;
    video?: string;
    text: string[];
}

export const timelineData: TimelineMoment[] = [
    {
        id: 'purva-sreshta',
        title: '❤️ Първата ни среща',
        image: firstImage,
        text: [
            'Денят, в който всичко започна.',
            'Не знаех какво ни очаква, но още тогава разбрах, че си специален човек.',
            'Ако можех, бих преживял този ден още хиляди пъти.',
        ],
    },
    {
        id: 'purvo-kino',
        title: '❤️ Първото ни кино',
        video: firstVideo,
        text: [
            'Една прожекция.',
            'Две усмивки.',
            'Още един красив спомен, който никога няма да забравя.',
        ],
    },
    {
        id: 'purva-pochivka',
        title: '❤️ Първата ни почивка',
        image: secondImage,
        text: [
            'Първата ни почивка.',
            'Първата ни Нова година.',
            'Едни от най-хубавите дни в живота ми.',
            'Надявам се това да бъде само началото на още безброй такива моменти.',
        ],
    },
];