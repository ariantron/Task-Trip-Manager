#!/bin/sh
# Exit immediately if a command exits with a non-zero status
set -e

# Install PHP dependencies using Composer
composer install

# Start the PHP built-in web server
php -S 0.0.0.0:8005 -t ./public
