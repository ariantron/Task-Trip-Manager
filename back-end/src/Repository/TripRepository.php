<?php

namespace App\Repository;

use App\Entity\Trip;
use App\RepositoryInterface\TripRepositoryInterface;
use Doctrine\Persistence\ManagerRegistry;

class TripRepository extends BaseRepository implements TripRepositoryInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Trip::class);
    }

    public function create(string $name, object $driver, object $truck): Trip
    {
        $trip = new Trip();
        $trip->setName($name);
        $trip->setDriver($driver);
        $trip->setTruck($truck);

        $this->getEntityManager()->persist($trip);
        $this->getEntityManager()->flush();

        return $trip;
    }
}
