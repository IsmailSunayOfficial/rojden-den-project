export interface TimelineMoment {
  id: string
  title: string
  /**
   * Пътят до снимката. Замени с истинската снимка в src/assets/images/
   * и обнови пътя тук, например: import purviaSreshta from '../assets/images/purva-sreshta.jpg'
   */
  image: string
  text: string[]
}

export const timelineData: TimelineMoment[] = [
  {
    id: 'purva-sreshta',
    title: '❤️ Първата ни среща',
        image: 'src/assets/images/1782947740639.jpg',
    text: [
      'Денят, в който всичко започна.',
      'Не знаех какво ни очаква, но още тогава разбрах, че си специален човек.',
      'Ако можех, бих преживял този ден още хиляди пъти.',
    ],
  },
  {
    id: 'purvo-kino',
    title: '❤️ Първото ни кино',
    video: 'src/assets/videos/936e9081-74bc-4018-8f74-4319a2856c4e.mp4',
    text: ['Една прожекция.', 'Две усмивки.', 'Още един красив спомен, който никога няма да забравя.'],
  },
  {
    id: 'purva-pochivka',
    title: '❤️ Първата ни почивка',
      image: 'src/assets/images/1782947740627.jpg',
    text: [
      'Първата ни почивка.',
      'Първата ни Нова година.',
      'Едни от най-хубавите дни в живота ми.',
      'Надявам се това да бъде само началото на още безброй такива моменти.',
    ],
  },
]
