<?php

namespace App\Repository;

use App\Entity\Trip;
use App\Entity\TripTask;
use App\RepositoryInterface\TripRepositoryInterface;
use Doctrine\Persistence\ManagerRegistry;
use Exception;

class TripRepository extends BaseRepository implements TripRepositoryInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Trip::class);
    }

    public function create($driver, $truck): Trip
    {
        $trip = new Trip();
        $trip->setDriver($driver);
        $trip->setTruck($truck);

        $this->getEntityManager()->persist($trip);
        $this->getEntityManager()->flush();

        return $trip;
    }

    /**
     * @throws Exception
     */
    public function assignTask($trip, $task): void
    {
        if ($this->isTaskAssignedToTrip($trip, $task)) {
            throw new Exception('Task is already assigned to the trip.');
        }

        $tripTask = new TripTask();
        $tripTask->setTask($task);
        $tripTask->setTrip($trip);

        $this->getEntityManager()->persist($tripTask);
        $this->getEntityManager()->flush();
    }

    private function isTaskAssignedToTrip($trip, $task): bool
    {
        $tripTask = $this->getEntityManager()->getRepository(TripTask::class)
            ->findOneBy(['task' => $task, 'trip' => $trip]);

        return $tripTask !== null;
    }

    /**
     * @throws Exception
     */
    public function unassignTask($trip, $task): void
    {
        $tripTask = $this->getEntityManager()->getRepository(TripTask::class)
            ->findOneBy(['task' => $task, 'trip' => $trip]);

        if (!$tripTask) {
            throw new Exception('Task is not assigned to the trip.');
        }

        $this->getEntityManager()->remove($tripTask);
        $this->getEntityManager()->flush();
    }
}
