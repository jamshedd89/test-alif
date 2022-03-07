import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from '../routes';
import { POST_ROUTE } from '../utils/consts';


function AppRouter() {
  
  return (
    <Switch>
      {routes.map(({path, Component})=>
        <Route key={path} path={path} component={Component} exact />
      )}
      <Redirect to={POST_ROUTE} />
    </Switch>
  )
}

export default AppRouter;
