<?php

namespace App\RepositoryInterface;

interface TripRepositoryInterface extends BaseRepositoryInterface
{
    public function create($name, $driver, $truck);
}
