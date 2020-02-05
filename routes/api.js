const route = require('express').Router()
const services=require('../controllers/services')
route.get('/', async(req, res) => {
    const{error,response} = await services.getAllContacts();
    if (!error) res.status(200).send(response);
    else res.status(500).send({ message: 'internal server error' });
});
route.get('/contact/:id', async(req, res) => {
    const { error, response } = await services.getContact(req.params.id);
    if (!error && response) res.status(200).send(response);
    else if (!response) res.status(400).send('bad request');
    else res.status(500).send({ message: 'internal server error' });
});
route.post('/create', async(req, res) => {
    const { error, response,message } = await services.createContact(req.body);
    if (!error) res.status(200).send(response);
    else if(message) res.status(400).send(message)
    else res.status(500).send({ message: 'internal server error' });
});

route.put('/update/:id', async (req, res) => {
    const { error, response } = await services.updateContact(req.params.id,req.body);
    if (!error && response) res.status(200).send(response);
    else if (!response) res.status(400).send('bad request');
    else res.status(500).send({ message: 'internal server error' });
});
route.delete('/delete/:id', async (req, res) => {
    const { error, response } = await services.deleteContact(req.params.id);
    if (!error && response) res.status(200).send(response);
    else if (!response) res.status(400).send('bad request');
    else res.status(500).send({ message: 'internal server error' });  
});
module.exports = route;
