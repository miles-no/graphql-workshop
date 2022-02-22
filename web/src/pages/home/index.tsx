import { useGetCategoriesQuery } from '@/pages/home/operations/get-categories.gql';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { CircularProgress, Paper, styled, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import randomcolor from 'randomcolor';
import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const { data, loading } = useGetCategoriesQuery();

  const colors = randomcolor({ count: data?.categories?.length ?? 0, seed: 'miles', luminosity: 'dark' });

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Content>
      <Typography className="title" gutterBottom variant="h1" component="div">
        <MusicNoteIcon className="logo" />
        <span>ukebox</span>
      </Typography>
      {data?.categories?.map(c => (
        <motion.div
          className="category-list"
          key={c?.id}
          initial={{ scale: 0, rotate: 180 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 35,
          }}
        >
          <Link to={`/category/${c?.id}`}>
            <Paper
              elevation={6}
              className="category"
              variant="elevation"
              style={{ backgroundColor: colors[c?.id ?? 0 - 1] }}
              square={false}
            >
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
              >
                {c?.name}
              </Typography>
            </Paper>
          </Link>
        </motion.div>
      ))}
    </Content>
  );
};

const Content = styled('div')`
  width: 100%;
  min-height: 95vh;
  justify-content: center;
  align-items: center;
  width: 100%;
  & a {
    text-decoration: none;
    color: ${({ theme: { palette } }) => palette.primary.main};
  }
`;
