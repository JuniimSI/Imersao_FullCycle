#!/bin/bash

npm install
npm run typeorm migration:run
npm run console fixtures
cp -r src/protofiles/ dist/protofiles
npm run start:dev