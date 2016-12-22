#!/bin/bash

current_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

qemu-img convert -f qcow2 -O raw $HOME/.capstan/instances/qemu/unikernel-kotlin/disk.qcow2 /tmp/disk.raw

if [ ! -d "$current_dir/../build/gce" ] ; then
  mkdir $current_dir/../build/gce
fi

cd /tmp
tar -czvf - disk.raw > $current_dir/../build/gce/unikernel-kotlin.tar.gz
cd $current_dir
rm /tmp/disk.raw
