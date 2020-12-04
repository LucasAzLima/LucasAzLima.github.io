import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { observer } from 'mobx-react';

import { theme } from 'Theme';

import PDI from 'pages/PDI';

const App = observer(() => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PDI} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
});

export default App;
