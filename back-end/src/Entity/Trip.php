<?php

namespace App\Entity;

use App\Repository\TripRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TripRepository::class)]
#[ORM\Table(name: "trips")]
class Trip extends Base
{
    #[ORM\ManyToOne(targetEntity: Driver::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $driver;

    #[ORM\ManyToOne(targetEntity: Truck::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $truck;

    /**
     * @return mixed
     */
    public function getDriver(): Driver
    {
        return $this->driver;
    }

    /**
     * @param mixed $driver
     */
    public function setDriver(Driver $driver): void
    {
        $this->driver = $driver;
    }

    /**
     * @return mixed
     */
    public function getTruck(): Truck
    {
        return $this->truck;
    }

    /**
     * @param mixed $truck
     */
    public function setTruck(Truck $truck): void
    {
        $this->truck = $truck;
    }
}

