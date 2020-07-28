const express = require('express');

const OngController = require('./controllers/OngController');
const CampaignController = require('./controllers/CampaignController');
const ProfileControler = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionControler');

const routes = express.Router();

console.log('App running');
//Query Params to specify some object  == request.query 
// ex: http://localhost:3333/campaign?page=1

//Route Params to  specify a route == request.params
//ex:

//Request Body to create and acess a

routes.get('/ong',OngController.index);
routes.post('/ong',OngController.create);
routes.delete('/ong/:id',OngController.delete);
//--------

routes.get('/campaign',CampaignController.index);

routes.post('/campaign',CampaignController.create);

routes.delete('/campaign/:id', CampaignController.delete);

//-------
routes.get('/profile',ProfileControler.index)


//-------
routes.post('/session',SessionController.create);

//------
module.exports = routes;