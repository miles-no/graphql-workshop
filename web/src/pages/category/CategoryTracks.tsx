import { Category } from '@/pages/category/useCategoryData';
import { formatDuration } from '@/time';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  category: Category;
}

export const CategoryTracks: React.FC<Props> = ({ category }) => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Track</TableCell>
            <TableCell>Album</TableCell>
            <TableCell>Artist</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {category.tracks.map(track => (
            <TableRow key={track.id}>
              <TableCell component="th" scope="row">
                {track.name}
              </TableCell>
              <TableCell>
                <Link to={`/album/${track.albumId}`}>{track.albumName}</Link>
              </TableCell>
              <TableCell>
                <Link to={`/artist/${track.artistId}`}>{track.artistName}</Link>
              </TableCell>
              <TableCell>{formatDuration(track.duration)}</TableCell>
              <TableCell align="right">{track.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
