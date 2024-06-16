<?php

namespace App\RepositoryInterface;

interface TripRepositoryInterface extends BaseRepositoryInterface
{
    public function create(string $name,object $driver,object $truck);
}
