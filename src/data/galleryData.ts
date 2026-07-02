// src/data/galleryData.ts
export interface GalleryPhoto {
    id: string;
    src: string;
    alt?: string;
}

// Автоматично зарежда всички снимки от папката
const photoModules = import.meta.glob('../assets/images/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
});

export const galleryData: GalleryPhoto[] = Object.entries(photoModules).map(([path, src], index) => {
    const fileName = path.split('/').pop() || `photo-${index + 1}`;
    const name = fileName.replace(/\.(jpg|jpeg|png|webp)$/i, '');

    return {
        id: `photo-${index + 1}`,
        src: src as string,
        alt: name,
    };
});