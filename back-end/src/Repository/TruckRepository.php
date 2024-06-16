<?php

namespace App\Repository;

use App\Entity\Truck;
use Doctrine\Persistence\ManagerRegistry;
use Psr\Log\LoggerInterface;

class TruckRepository extends BaseRepository
{
    public function __construct(ManagerRegistry $registry, LoggerInterface $logger)
    {
        parent::__construct($registry, Truck::class, $logger);
    }
}
