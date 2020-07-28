
import { BrowserRouter,Route, Switch} from 'react-router-dom';
import React from 'react';
import Logon from './pages/Logon';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import CreateONG from './pages/CreateONG/createONG';
import CreateCampaign from './pages/CreateCampaign/CreateCampaign';

export default  function Routes()
{
 return(
    <BrowserRouter>
      <Switch>
          <Route path ="/" exact component={ Logon }/>
          <Route path="/register" component={Register}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/createONG" component={CreateONG}/>
          <Route path="/createCampaign" component={CreateCampaign}/>
      </Switch>
    </BrowserRouter>
  );
}
