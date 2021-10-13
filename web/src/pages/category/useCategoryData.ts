export interface Category {
  id: number;
  name: string;
  tracks: Track[];
}
export interface Track {
  id: number;
  name: string;
  albumId: number;
  albumName: string;
  artistId: number;
  artistName: string;
  duration: number;
  price: number;
}

export const useCategoryData = () => {
  return {
    id: 1,
    name: 'Rock',
    tracks: [
      {
        id: 1,
        name: 'Some song 1',
        albumId: 1,
        albumName: 'Some album 1',
        artistId: 1,
        artistName: 'Some Artist 1',
        duration: 250,
        price: 10,
      },
      {
        id: 2,
        name: 'Some song 2',
        albumId: 1,
        albumName: 'Some album 1',
        artistId: 1,
        artistName: 'Some Artist 1',
        duration: 201,
        price: 10,
      },
    ],
  } as Category;
};
