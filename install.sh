#!/usr/bin/env bash

if [ "$UID" = "0" ]; then
  echo "This script should not be run as root"
  exit 1
fi

NAME=RemovePoweroffActionButton\@pratap.fastmail.fm
DEST=~/.local/share/gnome-shell/extensions/$NAME

echo 'Installing...'
if [ ! -d $DEST ]; then
  mkdir -p $DEST
fi
cp -r src/* $DEST/

echo 'Done'
