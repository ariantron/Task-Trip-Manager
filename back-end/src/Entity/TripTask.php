<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ORM\Table(name: "trip_tasks")]
class TripTask extends Base
{
    #[ORM\ManyToOne(targetEntity: Trip::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $trip;

    #[ORM\ManyToOne(targetEntity: Task::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $task;

    /**
     * @return mixed
     */
    public function getTrip(): Trip
    {
        return $this->trip;
    }

    /**
     * @param mixed $trip
     */
    public function setTrip(Trip $trip): void
    {
        $this->trip = $trip;
    }

    /**
     * @return mixed
     */
    public function getTask(): Task
    {
        return $this->task;
    }

    /**
     * @param mixed $task
     */
    public function setTask(Task $task): void
    {
        $this->task = $task;
    }
}
