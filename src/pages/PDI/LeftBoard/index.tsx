import React from 'react';
import { Box, Divider, Paper, Typography } from '@material-ui/core';
import { observer } from 'mobx-react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

interface LB {
  options?: string[];
}
const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      marginLeft: 10,
    },
    box: {
      display: 'flex',
    },
  })
);

function hashLinkScroll(id: string) {
  if (id !== '') {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView();
  }
}

const Leftboard: React.FC<LB> = observer(({ options }) => {
  const classes = useStyles();
  return (
    <Box marginTop="10vh">
      <Paper className={classes.paper}>
        {options?.map((option, id) => (
          <Typography
            variant="subtitle2"
            key={id}
            onClick={() => hashLinkScroll(option)}
          >
            {option}
          </Typography>
        ))}
      </Paper>
      <Divider orientation="vertical" flexItem />
    </Box>
  );
});

export default Leftboard;
