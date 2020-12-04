import React from 'react';
import {
  Box,
  createStyles,
  makeStyles,
  Typography,
  Theme,
} from '@material-ui/core';
import { observer } from 'mobx-react';
import { Colors } from 'styles';

interface NB {
  title?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      display: 'flex',
      backgroundColor: Colors.primary,
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'fixed',
    },
    title: {
      margin: theme.spacing(1),
      color: 'white',
      marginRight: 5,
      fontWeight: 'bold',
    },
  })
);

const Navbar: React.FC<NB> = observer(({ children, title }) => {
  const classes = useStyles();

  return (
    <Box width="100%" height="10vh" className={classes.box}>
      <Typography variant="body2" className={classes.title}>
        {title}
      </Typography>
      {children}
    </Box>
  );
});

export default Navbar;
