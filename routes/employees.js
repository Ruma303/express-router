    const employees = [
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

    const express = require('express');
    const app = express();
    const router = express.Router();

    module.exports = router
        .get('/', (req, res)=> {
            res.status(200).json(employees)})

        .get('/:id', (req, res) => {
            const employee = employees.find((emp) => emp.id === parseInt(req.params.id));
            if (employee) {
                res.status(200).json(employee);
            } else {
                return res.json({status: 404, message: `Dipendente con id ${req.params.id} non trovato`});
            }});

