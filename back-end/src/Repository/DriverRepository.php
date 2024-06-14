<?php

namespace App\Repository;

use App\Entity\Driver;
use Doctrine\Persistence\ManagerRegistry;

class DriverRepository extends BaseRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Driver::class);
    }
}
