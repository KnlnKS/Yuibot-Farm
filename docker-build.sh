#!/usr/bin/env bash

# Exit if any command fails
set -e

url=""
auth=""

function usage()
{
  echo "Build Docker Image"
  echo "Usage:  ./build-docker.sh [options]"
  echo ""
  echo "Options:"
  echo "  --help                       Show help"
  echo "  --url                        Discord URL"
  echo "  --auth                       Token"
  echo ""
  echo ""
}

while [[ "${1}" != "" ]]; do
  param=$(echo "${1}" | awk -F= '{print $1}')
  value=$(echo "${1}" | awk -F= '{print $2}')
  case ${param} in
    --help)
      usage
      exit
      ;;
    --url)
      url="${value}"
      ;;
      --auth)
      auth="${value}"
      ;;
    *)
      echo "ERROR: unknown parameter \"${param}\""
      usage
      exit 1
      ;;
  esac
  shift
done

if [[ -z ${url} ]]
then
  echo "ERROR: url must be set."
  usage
  exit 1
fi

if [[ -z ${auth} ]]
then
  echo "ERROR: auth must be set."
  usage
  exit 1
fi

# Build base image
docker build \
  --tag "yuibot-farmer:1.0.0" \
  --build-arg URL="${url}" \
  --build-arg AUTH="${auth}" \
  --file "docker/Dockerfile" .
