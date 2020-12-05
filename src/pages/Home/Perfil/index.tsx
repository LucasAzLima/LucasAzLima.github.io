import React from 'react';
import { Box, Typography, Avatar, Link } from '@material-ui/core';
import { observer } from 'mobx-react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { MdDeveloperMode } from 'react-icons/md';
import perfil from 'assets/perfil.png';
const useStyles = makeStyles(() =>
  createStyles({
    avatar: {
      width: 'auto',
      height: 'auto',
      margin: 'auto',
      maxWidth: '200px',
      maxHeight: '200px',
      marginBottom: 20,
    },
    item: {
      marginBottom: 10,
      color: 'black',
      alignItems: 'center',
    },
    item2: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    item3: {
      marginLeft: 5,
    },
    link: {
      color: 'black',
      marginLeft: 5,
      '&:hover': {
        cursor: 'pointer',
        textDecoration: 'none',
        alignItens: 'center',
      },
    },
  })
);
const Perfil = observer(() => {
  const classes = useStyles();
  return (
    <Box marginLeft="10px" width="auto" height="auto">
      <Avatar src={perfil} alt="Lucas_Lima" className={classes.avatar} />
      <Typography variant="h5" className={classes.item}>
        Lucas de Azevedo Lima
      </Typography>
      <Typography variant="body2" className={classes.item}>
        Bacharel em Engenharia de Computação - UFRN
      </Typography>
      <Box className={classes.item2}>
        <MdDeveloperMode />
        <Typography variant="body2" className={classes.item3}>
          Desenvolvedor frontend web/mobile
        </Typography>
      </Box>
      <Box className={classes.item}>
        <FaGithub />
        <Link
          className={classes.link}
          target="_blank"
          href="https://github.com/LucasAzLima"
        >
          Github
        </Link>
      </Box>
      <Box className={classes.item}>
        <FaLinkedin color="#0073b1" />
        <Link
          className={classes.link}
          target="_blank"
          href="https://www.linkedin.com/in/lucasazlima"
        >
          Linkedin
        </Link>
      </Box>
      <Box className={classes.item2}>
        <HiOutlineMail />
        <Typography variant="body2" className={classes.item3}>
          lucas.a.lima13@outlook.com
        </Typography>
      </Box>
    </Box>
  );
});

export default Perfil;
