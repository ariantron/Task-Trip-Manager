<?php

namespace App\RepositoryInterface;

interface TaskRepositoryInterface extends BaseRepositoryInterface
{
    public function assign(object $task, object $trip): void;

    public function unassign(object $task, object $trip): void;
}
