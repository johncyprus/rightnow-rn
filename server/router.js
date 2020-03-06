const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/patientInfo', (req, res) => {
    controller.storePatientInfo(req, res);
});

router.put('/medicalHistory', (req, res) => {
    controller.storeMedicalHistory(req, res);
});

router.post('/createNurses', (req, res) => {
    controller.createNurses(req, res);
});

router.get('/nurseList', (req, res) => {
    controller.fetchNurses(req, res);
})

module.exports = router;