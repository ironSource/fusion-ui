#!/bin/bash
set -e

branch=$1
folder=$(echo "$branch" | tr / -)

FOLDER=$folder npm run aws:build && FOLDER=$folder npm run aws:deploy

FOLDER=$folder npm run cf:invalidate

exit $lastCode
