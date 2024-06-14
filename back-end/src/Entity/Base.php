<?php

namespace App\Entity;

use DateTime;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Uid\Ulid;

#[ORM\HasLifecycleCallbacks]
#[ORM\MappedSuperclass]
class Base
{
    #[ORM\Id]
    #[ORM\Column(type: 'ulid', unique: true)]
    public $id;

    #[ORM\Column(name: "created_at", type: 'datetime')]
    public $createdAt;

    #[ORM\Column(name: "updated_at", type: 'datetime')]
    public $updatedAt;

    public function __construct()
    {
        $this->id = new Ulid();
    }

    #[ORM\PrePersist]
    public function onPrePersist()
    {
        $this->createdAt = new DateTime();
        $this->updatedAt = new DateTime();
    }

    #[ORM\PreUpdate]
    public function onPreUpdate()
    {
        $this->updatedAt = new DateTime();
    }
}
