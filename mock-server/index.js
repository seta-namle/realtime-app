const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3030;
const { authenticationMiddleware } = require('./middlewares');

app.use(cors());

// Body Parser Middleware
app.use(
  bodyParser.urlencoded({
    limit: '50mb'
  })
);
app.use(
  bodyParser.json({
    limit: '50mb'
  })
);

const { taskRoute, jobRoute } = require('./routes');

app.use('/api/tasks', [authenticationMiddleware, taskRoute]);
app.use('/api/jobs', [authenticationMiddleware, jobRoute]);

// Start Server
const server = require('http').Server(app);

server.listen(PORT, () => {
  console.log('Mock Server started on port ' + PORT);
});
