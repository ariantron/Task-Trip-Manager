<?php

namespace App\Repository;

use App\Entity\Task;
use App\RepositoryInterface\TaskRepositoryInterface;
use Doctrine\Persistence\ManagerRegistry;
use Exception;

class TaskRepository extends BaseRepository implements TaskRepositoryInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Task::class);
    }

    public function assign(object $task, object $trip): void
    {
        $task->setTrip($trip);

        $this->getEntityManager()->persist($task);
        $this->getEntityManager()->flush();
    }

    public function unassign(object $task, object $trip): void
    {
        if ($task->getTrip()->getId() != $trip->getId()) {
            throw new Exception('Task not found for trip ' . $trip->getId());
        }

        $task->setTrip(null);

        $this->getEntityManager()->persist($task);
        $this->getEntityManager()->flush();
    }
}
