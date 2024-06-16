<?php

namespace App\Entity;

use App\Repository\TaskRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: TaskRepository::class)]
#[ORM\Table(name: "tasks")]
class Task extends Base
{
    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['trip', 'task'])]
    private $title;

    #[ORM\Column(type: 'text')]
    #[Groups(['trip', 'task'])]
    private $description;

    #[ORM\ManyToOne(targetEntity: Trip::class, inversedBy: "tasks")]
    #[ORM\JoinColumn(nullable: true)]
    #[Groups(['task'])]
    private $trip;

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @param string $title
     */
    public function setTitle(string $title): void
    {
        $this->title = $title;
    }

    /**
     * @return string
     */
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * @param string $description
     */
    public function setDescription(string $description): void
    {
        $this->description = $description;
    }

    /**
     * @return mixed
     */
    public function getTrip(): mixed
    {
        return $this->trip;
    }

    /**
     * @param mixed $trip
     */
    public function setTrip(mixed $trip): void
    {
        $this->trip = $trip;
    }
}
