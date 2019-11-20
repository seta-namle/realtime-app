const express = require('express');
const _ = require('lodash');
const router = express.Router();
const config = require('../config');
const jobs = require('../__mocks__/job');
router.get('/', (req, res) => {
  const useMock = _.get(config, 'job.getListJobs.useMock', false);
  const url = _.get(config, 'job.getListJobs.url', '');
  if (useMock) {
    return jobs;
  }
});

router.get('/:jobId', (req, res) => {
  const useMock = _.get(config, 'job.getJobDetail.useMock', false);
  const url = _.get(config, 'job.getJobDetail.url', '');
  const jobId = req.params.jobId;
  if (useMock) {
    let mockJob = _.find(jobs, { internalJobId: jobId });
    if (!mockJob) {
      mockJob = jobs[0];
    }
    return res.send(mockJob);
  }
});

module.exports = router;
