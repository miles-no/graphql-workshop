import { Category } from '@/pages/category/useCategoryData';
import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

interface Props {
  category: Category;
}

export const CategoryTile: React.FC<Props> = ({ category }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h2" gutterBottom>
          {category.name}
        </Typography>
      </CardContent>
    </Card>
  );
};
