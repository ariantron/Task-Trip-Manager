#!/bin/sh
set -e

# Install dependencies with Composer
composer install

# Run Symfony migrations using the Symfony CLI
symfony console doctrine:migrations:migrate --no-interaction

# Load Symfony fixtures using the Symfony CLI
symfony console doctrine:fixtures:load --no-interaction

# Start the built-in server using the Symfony CLI
symfony server:start --port=8080

