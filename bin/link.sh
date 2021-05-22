#!/bin/bash
set -e

if [ -z "$1" ]
  then
    echo "Must pass relative path to project root."
    exit 1
fi
dir=$1

npm link $dir/node_modules/react $dir/node_modules/styled-components --legacy-peer-deps
yarn link
(cd $dir && yarn link @viniciushaddad/react-ui)
