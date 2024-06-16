<?php

namespace App\Repository;

use App\Entity\Task;
use App\RepositoryInterface\TaskRepositoryInterface;
use Doctrine\Persistence\ManagerRegistry;
use Exception;
use Psr\Log\LoggerInterface;

class TaskRepository extends BaseRepository implements TaskRepositoryInterface
{
    public function __construct(ManagerRegistry $registry, LoggerInterface $logger)
    {
        parent::__construct($registry, Task::class, $logger);
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
