    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
        console.log(`Richiesta in arrivo: Metodo ${req.method} | URI ${req.url}`);
        res.send('<h1>Risposta ricevuta</h1>');
    })
    .get('/contatti', (req, res) => {
        console.log(`Richiesta in arrivo: Metodo ${req.method} | URI ${req.url}`);
        res.send('<h1>Sei nella pagina Contatti</h1>');
    })
    .post('/contatti', (req, res) => {
        console.log(`Richiesta in arrivo: Metodo ${req.method} | URI ${req.url}`);
        res.send('<h1>Richiesta ricevuta</h1>');
    })
    .listen(3000);


    //% Creazione REST API
    /* app.all('/admin/*', (req, res) => {
        const isAdmin = false;
        if (!isAdmin) {
            res.status(401).send('Non sei un amministratore');
        }
        console.log(`Richiesta in arrivo: Metodo ${req.method} | URI ${req.url}\n`);
        res.status(200).send('Richiesta catturata');
    }).listen(3000); */


    //, Gestire richieste e risposte simili
    /* app.get('/profile', (req, res) => {
        res.status(200).send(`Sei nella rotta: ${req.url}`);
    }); */
    /* app.get(['/profile', '/profile2', '/profile3', '/profileN'],
        (req, res) => res.status(200).send(`Sei nella rotta: ${req.url}`)); */


    //, Espressioni regolari
    /* app.get(['/user', /^\/profile([1-9]|[1-9]\d|100)$/],
        (req, res) => res.status(200).send(`Sei nella rotta: ${req.url}`)); */


    //, Gestire i parametri di un URL
    /* app.get('/', (req, res) => {
        console.log(req.query);
    }).listen(3000); */


    //, Parametri dinamici
    /* app.get('/user/:id', (req, res) => {
        console.log(req.params);
    }).listen(3000); */


    //, Lavorare con JSON
    /* const employees = [
        {
            id: 1,
            name: "Mario Rossi",
            job: "Developer"
        },
        {
            id: 2,
            name: "Ornella Bianchi",
            job: "Web Designer"
        }
    ];

    app.get('/employees', (req, res)=> {
        res.status(200).json(employees);
    })
    .get('/employees/:id', (req, res) => {
        const employee = employees.find((emp) => emp.id === parseInt(req.params.id));
        if (employee) {
            res.status(200).json(employee);
        } else {
            return res.json({status: 404, message: `Dipendente con id ${req.params.id} non trovato`});
        }
    }).listen(3000); */


    //, Modulo Router
    // app.use('/employees', require('./routes/employees')).listen(3000);