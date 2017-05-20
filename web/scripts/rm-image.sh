#!/usr/bin/env bash

unik stop --instance unikernel-kotlin-web;
sleep 5;
unik rm --instance unikernel-kotlin-web;
