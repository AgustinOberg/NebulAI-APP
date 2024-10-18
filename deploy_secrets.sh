#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: $0 <environment>"
  exit 1
fi

ENV_FILE=".env.$1"

if [ ! -f "$ENV_FILE" ]; then
  echo "File $ENV_FILE not found!"
  exit 1
fi

while IFS= read -r line || [ -n "$line" ]; do
  if [[ -z "$line" || "$line" == \#* ]]; then
    continue
  fi

  name=$(echo "$line" | cut -d '=' -f 1)
  value=$(echo "$line" | cut -d '=' -f 2-)

  value=$(echo "$value" | tr -d '"')

  eas secret:create --name "$name" --value "$value" --type string --force --non-interactive > /dev/null
done < "$ENV_FILE"
