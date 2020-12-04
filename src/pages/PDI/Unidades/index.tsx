import React from 'react';
import { Box } from '@material-ui/core';
import { observer } from 'mobx-react';
import { selectUnidade } from 'state/PDI';
import U1 from './U1';
import U2 from './U2';
import U3 from './U3';

const Unidades = observer(() => {
  return (
    <Box marginTop="10vh" marginLeft="20px">
      <U1 hidden={selectUnidade.currentUnit !== 0} />
      <U2 hidden={selectUnidade.currentUnit !== 1} />
      <U3 hidden={selectUnidade.currentUnit !== 2} />
    </Box>
  );
});

export default Unidades;
