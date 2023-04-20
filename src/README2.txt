npm run start

export NODE_OPTIONS=--openssl-legacy-provider

npx tailwindcss -i ./src/index.css -o ./src/output.css --watch
