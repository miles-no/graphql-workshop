import { useArtistData } from '@/pages/artist/useArtistData';
import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useAsync } from 'react-use';

export const Artist: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log(`Artist: ${id}`);
  // TODO: load artist from server
  const artist = useArtistData();

  const data = useAsync(async () => {
    const result = await fetch(
      `https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${artist.name}`,
    ).then(res => res.json());

    if (!result?.query?.pages) {
      return null;
    }

    return result.query.pages[Object.keys(result.query.pages)[0]];
  }, [artist.id]);

  return (
    <Card>
      <CardContent>
        <Typography variant="h2" gutterBottom>
          {artist.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {data.value?.extract}
        </Typography>
      </CardContent>
    </Card>
  );
};
