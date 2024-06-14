<?php

namespace App\Repository;

use App\Entity\Truck;
use Doctrine\Persistence\ManagerRegistry;

class TruckRepository extends BaseRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Truck::class);
    }
}
