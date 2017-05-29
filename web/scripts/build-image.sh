#!/usr/bin/env bash

unik build \
  --force \
  --name web \
  --path . \
  --base rump \
  --language nodejs \
  --provider virtualbox
