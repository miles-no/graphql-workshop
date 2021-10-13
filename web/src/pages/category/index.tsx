import { CategoryTile } from '@/pages/category/CategoryTile';
import { CategoryTracks } from '@/pages/category/CategoryTracks';
import { Grid } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useCategoryData } from './useCategoryData';

export const Category: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log(`Category: ${id}`);
  const category = useCategoryData();

  return (
    <Grid container>
      <Grid item xs={3} padding={2}>
        <CategoryTile category={category} />
      </Grid>
      <Grid item xs={9} padding={2}>
        <CategoryTracks category={category} />
      </Grid>
    </Grid>
  );
};
