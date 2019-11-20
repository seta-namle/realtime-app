const express = require('express');
const _ = require('lodash');
const router = express.Router();
const config = require('../config');
const tasks = require('../__mocks__/task');
router.get('/', (req, res) => {
  const useMock = _.get(config, 'task.getListTasks.useMock', false);
  const url = _.get(config, 'task.getListTasks.url', '');
  if (useMock) {
    return res.send(tasks);
  }
});

router.get('/:taskId', (req, res) => {
  const useMock = _.get(config, 'task.getTaskDetail.useMock', false);
  const url = _.get(config, 'task.getTaskDetail.url', '');
  const taskId = req.params.taskId;
  if (useMock) {
    let mockTask = _.find(tasks, { internalTaskId: taskId });
    if (!mockTask) {
      mockTask = tasks[0];
    }
    return res.send(mockTask);
  }
});

module.exports = router;

