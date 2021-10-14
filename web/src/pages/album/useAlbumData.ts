export interface Album {
  id: number;
  name: string;
  artist: Artist;
  tracks: Track[];
  reviews: Review[];
}

interface Artist {
  id: number;
  name: string;
}

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  upVotes: number;
  downVotes: number;
  timestamp: Date;
}

interface Track {
  id: number;
  name: string;
  duration: number;
  category: Category;
  price: number;
}
interface Category {
  id: number;
  name: string;
}

export const useAlbumData = () => {
  return {
    id: 1,
    name: 'Album 1',
    reviews: [
      { id: 1, comment: 'Crap', author: 'Kurt Cobain', rating: 1, timestamp: new Date(), upVotes: 0, downVotes: 0 },
    ],
    artist: {
      id: 1,
      name: 'Some Arist 1',
    },
    tracks: [
      {
        id: 1,
        name: 'Some song 1',
        category: { id: 1, name: 'Rock' },
        duration: 250,
        price: 10,
      },
      {
        id: 2,
        name: 'Some song 2',
        category: { id: 2, name: 'Pop' },
        duration: 201,
        price: 10,
      },
    ] as Track[],
  } as Album;
};
