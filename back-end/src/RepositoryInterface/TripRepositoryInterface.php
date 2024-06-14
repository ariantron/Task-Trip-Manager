<?php

namespace App\RepositoryInterface;

interface TripRepositoryInterface extends BaseRepositoryInterface
{
    public function create($driver, $truck);

    public function assignTask($trip, $task);

    public function unassignTask($trip, $task);
}
