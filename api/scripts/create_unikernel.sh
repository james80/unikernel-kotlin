#!/usr/bin/env bash

cd ..

capstan build \
  -p qemu \
  unikernel-kotlin-api

capstan run \
  -p qemu \
  -f 8080:8080 \
  unikernel-kotlin-api
