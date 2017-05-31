#!/usr/bin/env bash

docker run -d \
    --name revproxy \
    --net=host \
    rapidoid/rapidoid \
    '/api->http://localhost:8080' \
    '/->http://localhost:8081' \
    on.port=80
