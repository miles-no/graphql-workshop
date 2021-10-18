import { useGetHelloWorldQuery } from '@/pages/home/operations/get-hello-world.gql';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { Paper, styled, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import randomcolor from 'randomcolor';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCategoriesData } from './useCategoriesData';
import { useGetGenresQuery } from '@/pages/home/operations/get-genres.gql';

export const Home: React.FC = () => {
  const genresResult = useGetGenresQuery();
  const categories = useCategoriesData();
  const colors = randomcolor({ count: categories.length, seed: 'miles', luminosity: 'dark' });

  // dummy query
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: dummyData, error } = useGetHelloWorldQuery({ skip: true, variables: { id: 'ola' } });

  // if (genresResult.loading) {
  //   return <div>Loading ...</div>;
  // }

  return (
    <Content>
      <Typography className="title" gutterBottom variant="h1" component="div">
        <MusicNoteIcon className="logo" />
        <span>ukebox</span>
      </Typography>
      {categories.map(c => (
        <motion.div
          className="category-list"
          key={c.id}
          initial={{ scale: 0, rotate: 180 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 35,
          }}
        >
          <Link to={`/category/${c.id}`}>
            <Paper
              elevation={6}
              className="category"
              variant="elevation"
              style={{ backgroundColor: colors[c.id - 1] }}
              square={false}
            >
              <Typography gutterBottom variant="h2" component="div">
                {c.name}
              </Typography>
            </Paper>
          </Link>
        </motion.div>
      ))}
      <div></div>
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
