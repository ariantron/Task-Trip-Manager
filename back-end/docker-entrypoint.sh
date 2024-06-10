#!/bin/sh
set -e

# Install dependencies with Composer
composer install

# Start the built-in server using the Symfony CLI
symfony server:start --port=8000

