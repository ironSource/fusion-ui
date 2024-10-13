#!/bin/bash
set -e

#branch=$1

#folder=$(echo "$branch" | tr / -)

folder=$1

FOLDER=$folder npm run aws:deploy-storybook

FOLDER=$folder npm run cf:invalidate

exit $lastCode
