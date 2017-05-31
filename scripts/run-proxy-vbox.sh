#!/usr/bin/env bash

docker run -d \
    --name revproxy \
    --net=host \
    rapidoid/rapidoid \
    '/api->http://192.168.56.102:8080' \
    '/->http://192.168.56.103:8081' \
    on.port=80
