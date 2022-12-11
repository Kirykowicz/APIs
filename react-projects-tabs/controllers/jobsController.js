const { request } = require('express');
const Job = require('../models/jobs');

module.exports.getJobById = async (req, res, next) => {
  let job;
  try {
    job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Cannot find that job' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.job = job;
  next();
};

module.exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.getJob = async (req, res) => {
  res.json(res.job);
};

module.exports.createJob = async (req, res) => {
  const job = new Job({
    order: req.body.order,
    title: req.body.title,
    dates: req.body.dates,
    duties: req.body.duties,
    company: req.body.company,
  });
  try {
    const newJob = await job.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports.updateJob = async (req, res) => {
  if (req.body.order) {
    res.job.order = req.body.order;
  }
  if (req.body.title) {
    res.job.title = req.body.title;
  }
  if (req.body.dates) {
    res.job.dates = req.body.dates;
  }
  if (req.body.duties) {
    res.job.duties = req.body.duties;
  }
  if (req.body.company) {
    res.job.company = req.body.company;
  }
  try {
    const updatedJob = await res.job.save();
    res.json(updatedJob);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.deleteJob = async (req, res) => {
  try {
    await res.job.remove();
    res.json({ message: 'Deleted job' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
