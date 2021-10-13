import { Album } from '@/pages/album/useAlbumData';
import { formatDuration } from '@/time';
import { Box, Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  album: Album;
}

export const AlbumTracks: React.FC<Props> = ({ album }) => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Track</TableCell>
            <TableCell>Categories</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {album.tracks.map(track => (
            <TableRow key={track.id}>
              <TableCell component="th" scope="row">
                {track.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {track.categories?.map(c => (
                  <Box key={c.id} component="span" marginRight={1}>
                    <Chip
                      component={Link}
                      to={`/category/${c.id}`}
                      className="quick-link"
                      label={c.name}
                      color="primary"
                      variant="outlined"
                      clickable
                    />
                  </Box>
                ))}
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
