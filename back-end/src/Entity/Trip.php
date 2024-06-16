<?php

namespace App\Entity;

use App\Repository\TripRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: TripRepository::class)]
#[ORM\Table(name: "trips")]
class Trip extends Base
{
    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['trip', 'task'])]
    private $name;

    #[ORM\ManyToOne(targetEntity: Driver::class)]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['trip', 'task'])]
    private $driver;

    #[ORM\ManyToOne(targetEntity: Truck::class)]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['trip', 'task'])]
    private $truck;

    #[ORM\OneToMany(targetEntity: Task::class, mappedBy: "trip")]
    #[Groups(['trip'])]
    private $tasks;

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName(string $name): void
    {
        $this->name = $name;
    }

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

    public function getTasks()
    {
        return $this->tasks;
    }
}

