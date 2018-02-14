#!/usr/bin/env bash

yarn install

node-sass style.scss style.css --source-map true

service nginx start
tail -f /var/log/nginx/error.log