#!/bin/zsh

# TODO: not sure this thing actually works - better to test it first
if [[ $OSTYPE == 'darwin'* ]]; then
  brew install git-crypt gpg pinentry-mac
elif [[ $OSTYPE == 'linux'* ]]; then
  $FLAVOR = apropos "package manager"
  if [[ $FLAVOR == 'dpkg'* ]]; then
  sudo apt-get update; sudo apt-get install git-crypt -y
  elif [[ $FLAVOR == 'dpkg'* ]]; then
    sudo apk add git-crypt
  # TODO: Add rpm.
  fi
fi
gpg --gen-key
