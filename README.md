docker run --rm \
  -v $(pwd):/src \
  --entrypoint="/usr/bin/buildNpmJS.sh" \
  -w="/src" \
  node:alpine3.11 