const express = require('express');
const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`) });
const envVars = require('./config/env-vars');

const app = express();

console.log(envVars);

app.listen(
  envVars.port,
  console.log(`Listening on port ${envVars.port} on environment ${envVars.environment}`)
);
