<?php

namespace App\RepositoryInterface;

interface TaskRepositoryInterface extends BaseRepositoryInterface
{
    public function assign($task, $trip): void;

    public function unassign($task, $trip): void;
}
