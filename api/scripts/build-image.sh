#!/usr/bin/env bash

unik build \
  --force \
  --name unikernel-kotlin-api \
  --path . \
  --base rump \
  --language java \
  --provider virtualbox \
  --args a=a
