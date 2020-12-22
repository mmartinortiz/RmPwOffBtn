#!/usr/bin/env bash

NAME=RemovePoweroffActionButton\@mmartinortiz

case "$1" in
  "local-install" )
    if [ "$UID" == "0" ]; then
      echo "This script should not be run as root"
      exit 1
    fi
    DEST=~/.local/share/gnome-shell/extensions/$NAME
    ;;
  "system" )
    DEST=/usr/share/gnome-shell/extensions/$NAME
    ;;
  * )
    echo "Use the parameter 'local-install' or 'system' (as root) for specifying a install scope"
    exit 1
esac

echo 'Installing...'
if [ ! -d $DEST ]; then
  mkdir -p $DEST
fi
cp -r src/* $DEST/

echo 'Done'
