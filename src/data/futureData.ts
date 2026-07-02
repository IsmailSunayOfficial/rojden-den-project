import zaednoGif from '../assets/gifs/zaedno.gif'
import rojdenDenGif from '../assets/gifs/rojden-den.gif'
import kapadokiaGif from '../assets/gifs/kapadokia.gif'
import rykaZaRykaGif from '../assets/gifs/ryka-za-ryka.gif'
import pochivkiGif from '../assets/gifs/pochivki.gif'
import semeystvoGif from '../assets/gifs/semeystvo.gif'

export interface FutureDream {
    id: string
    emoji: string
    text: string
    gif: string | null
}

export const futureData: FutureDream[] = [
    {
        id: 'zaedno',
        emoji: '🏡',
        text: 'Да живеем заедно.',
        gif: zaednoGif,
    },
    {
        id: 'rojden-den',
        emoji: '🎈',
        text: 'Да празнуваме рождения ден заедно.',
        gif: rojdenDenGif,
    },
    {
        id: 'kapadokia',
        emoji: '✈️',
        text: 'Да имаме възможност да отидем някой ден в Кападокия.',
        gif: kapadokiaGif,
    },
    {
        id: 'ryka-za-ryka',
        emoji: '🫶',
        text: 'Да сме ръка за ръка винаги.',
        gif: rykaZaRykaGif,
    },
    {
        id: 'pochivki',
        emoji: '🧳',
        text: 'Да отидем заедно на почивки.',
        gif: pochivkiGif,
    },
    {
        id: 'semeystvo',
        emoji: '👨‍👩‍👧',
        text: 'Да създадем някой ден нашето семейство.',
        gif: semeystvoGif,
    },
]