import React from 'react';
import { Box, Divider, Typography } from '@material-ui/core';
import { observer } from 'mobx-react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

interface LB {
  options?: string[];
}
const useStyles = makeStyles(() =>
  createStyles({
    devider: {
      backgroundColor: '#747373',
      marginRight: 10,
    },
    item: {
      color: '#4b4949',
      marginBottom: 10,
      fontSize: '14px',
      '&:hover': {
        cursor: 'pointer',
      },
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

  interface Item {
    id: number;
    option: string;
  }
  // eslint-disable-next-line react/prop-types
  const Item: React.FC<Item> = ({ id, option }) => (
    <Typography
      variant="subtitle2"
      key={id}
      onClick={() => hashLinkScroll(option)}
      className={classes.item}
    >
      {option}
    </Typography>
  );

  return (
    <Box display="flex" style={{ position: 'fixed' }}>
      <Divider
        orientation="vertical"
        flexItem={true}
        className={classes.devider}
      />
      <Box display="flex" flexDirection="column">
        {options?.map((option, id) => (
          <Item key={id} id={id} option={option} />
        ))}
      </Box>
    </Box>
  );
});

export default Leftboard;
