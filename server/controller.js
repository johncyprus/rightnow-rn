const {Patients, Pediatrics, Geriatrics, Transplant, Cardiac, GeneralMedicine, Postpartum, Oncology} = require('../db/sequelize');
const faker = require('faker');

module.exports = {
    storePatientInfo: (req, res) => {
        Patients.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            sex: req.body.sex,
            age: Number(req.body.age),
            birthday: req.body.birthday,
            addressline1: req.body.addressline1,
            addressline2: req.body.addressline2,
            city: req.body.city,
            state: req.body.state,
            zipcode: Number(req.body.zipcode),
            ethnicity: req.body.ethnicity,
            language: req.body.language,
            email: req.body.email
        })
        .then(response => {
            let reply = JSON.parse(JSON.stringify(response));
            res.status(200).send(`${reply.id}`)
        })
        .catch(error => {
            console.log('Error saving patient to DB:', error);
        })
    },
    storeMedicalHistory: (req, res) => {
        Patients.update({
            medicalhistory: JSON.stringify(req.body.history)
        }, {
            where: {
                id: req.body.id
            }
        })
        .then(response => {
            let reply = JSON.parse(JSON.stringify(response));
            res.status(200).send(`${reply.id}`)
        })
        .catch(error => {
            console.log('Error saving medical history to DB:', error);
        })
    },
    createNurses: (req, res) => {
        let bulkNurses = [];
        for (let i = 0; i < 5; i++) {
            let nurse = {
                name: faker.name.firstName(),
                description: faker.lorem.sentence(),
                avatar: faker.image.avatar(),
                hospital: "NYU Langone"
            }
            bulkNurses.push(nurse);
        }

        Pediatrics.bulkCreate(bulkNurses)
            .then(() => {
                Geriatrics.bulkCreate(bulkNurses)
            })
            .then(() => {
                Transplant.bulkCreate(bulkNurses)
            })
            .then(() => {
                Cardiac.bulkCreate(bulkNurses)
            })
            .then(() => {
                GeneralMedicine.bulkCreate(bulkNurses)
            })
            .then(() => {
                Postpartum.bulkCreate(bulkNurses)
            })
            .then(() => {
                Oncology.bulkCreate(bulkNurses)
            })
            .then(() => {
                console.log('CREATED NURSES IN DB');
                res.sendStatus(200);
            })
            .catch((error) => {console.log("Error saving nurses to DB:", error)})

    },
    fetchNurses: (req, res) => {
        // console.log('TEST FETCH:', req.query)
        if (req.query.specialty === 'pediatrics') {
            Pediatrics.findAll({limit: 5})
            .then(response => {
                let reply = JSON.parse(JSON.stringify(response));
                res.send(reply);
            })
            .catch(error => {console.log("Error fetching Nurse list:", error)});
        }

        if (req.query.specialty === 'geriatrics') {
            Geriatrics.findAll({limit: 5})
            .then(response => {
                let reply = JSON.parse(JSON.stringify(response));
                res.send(reply);
            })
            .catch(error => {console.log("Error fetching Nurse list:", error)});
        }

        if (req.query.specialty === 'transplant') {
            Transplant.findAll({limit: 5})
            .then(response => {
                let reply = JSON.parse(JSON.stringify(response));
                res.send(reply);
            })
            .catch(error => {console.log("Error fetching Nurse list:", error)});
        }

        if (req.query.specialty === 'cardiac') {
            Cardiac.findAll({limit: 5})
            .then(response => {
                let reply = JSON.parse(JSON.stringify(response));
                res.send(reply);
            })
            .catch(error => {console.log("Error fetching Nurse list:", error)});
        }

        if (req.query.specialty === 'generalmedicine') {
            GeneralMedicine.findAll({limit: 5})
            .then(response => {
                let reply = JSON.parse(JSON.stringify(response));
                res.send(reply);
            })
            .catch(error => {console.log("Error fetching Nurse list:", error)});
        }

        if (req.query.specialty === 'postpartum') {
            Postpartum.findAll({limit: 5})
            .then(response => {
                let reply = JSON.parse(JSON.stringify(response));
                res.send(reply);
            })
            .catch(error => {console.log("Error fetching Nurse list:", error)});
        }

        if (req.query.specialty === 'oncology') {
            Oncology.findAll({limit: 5})
            .then(response => {
                let reply = JSON.parse(JSON.stringify(response));
                res.send(reply);
            })
            .catch(error => {console.log("Error fetching Nurse list:", error)});
        }

        
    }

}