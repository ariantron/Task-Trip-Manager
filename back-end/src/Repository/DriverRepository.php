<?php

namespace App\Repository;

use App\Entity\Driver;
use Doctrine\Persistence\ManagerRegistry;
use Psr\Log\LoggerInterface;

class DriverRepository extends BaseRepository
{
    public function __construct(ManagerRegistry $registry, LoggerInterface $logger)
    {
        parent::__construct($registry, Driver::class, $logger);
    }
}
