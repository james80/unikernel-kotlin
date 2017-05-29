#!/usr/bin/env bash

unik build \
  --force \
  --name api \
  --path . \
  --base rump \
  --language java \
  --provider virtualbox
