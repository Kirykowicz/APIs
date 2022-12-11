const express = require('express');
const jobsController = require('../controllers/jobsController');

const router = express.Router();

router.get('/', jobsController.getJobs);

router.get('/:id', jobsController.getJobById, jobsController.getJob);

router.post('/', jobsController.createJob);

router.patch('/:id', jobsController.getJobById, jobsController.updateJob);

router.delete('/:id', jobsController.getJobById, jobsController.deleteJob);

module.exports = router;
