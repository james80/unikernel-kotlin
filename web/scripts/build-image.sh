#!/usr/bin/env bash

unik build \
  --force \
  --name unikernel-kotlin-web \
  --path . \
  --base rump \
  --language nodejs \
  --provider virtualbox
