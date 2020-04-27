const express = require('express');
//const passaport =require('passport');

const associationController = require('./controllers/associationController');
const donorController = require('./controllers/donorController');
const donateController = require('./controllers/donateController');
const profileAssociationController = require('./controllers/profileAssociationController');
const profileDonorController = require('./controllers/profileDonorController');
const sessionAssociationController = require('./controllers/sessionAssociationController');
const sessionDonorController = require('./controllers/sessionDonorController');

//const authAssotiation = require('./config/auth')(passaport);


const routes = express.Router();

routes.get('/association', associationController.index);
routes.post('/association',  associationController.create);


routes.get('/donor', donorController.index);
routes.post('/donor',  donorController.create);


routes.get('/donate', donateController.index);
routes.post('/donate/:id_association',  donateController.create);


routes.get('/profileAssociation', profileAssociationController.index);
routes.get('/profileDonor', profileDonorController.index);

routes.post('/sessionDonor',  sessionDonorController.create);
routes.post('/sessionAssociation',  sessionAssociationController.create);
module.exports = routes;


