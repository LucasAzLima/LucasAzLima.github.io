import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { observer } from 'mobx-react';

const Descripiton = observer(() => {
  return (
    <Box marginLeft="10px">
      <Typography variant="h5" style={{ marginBottom: 10 }}>
        Página pessoal
      </Typography>
      <Typography variant="body2">
        Nesta página serão apresentados resultados de disciplinas e projetos
        pessoais, com o objetivo de tanto para organizar os trabalhos feitos,
        como demonstar o que tenho estudado durante a faculdade e fora dela
        também.
      </Typography>
    </Box>
  );
});

export default Descripiton;
