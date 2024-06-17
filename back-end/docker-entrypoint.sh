#!/bin/sh
# Exit immediately if a command exits with a non-zero status
set -e

# Install PHP dependencies using Composer
composer install

# Create a new migration based on the current database schema
php bin/console make:migration

# Apply the migrations to the database
php bin/console doctrine:migrations:migrate

# Load data fixtures into the database
php bin/console doctrine:fixtures:load

# Start the PHP built-in web server
php -S localhost:8005 -t ./public
