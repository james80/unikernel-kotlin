#!/usr/bin/env bash

unik build \
  --force \
  --name unikernel-kotlin-api \
  --path . \
  --base osv \
  --language java \
  --provider virtualbox \
  --args a=a
