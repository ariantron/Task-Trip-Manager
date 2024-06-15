<?php

namespace App\Entity;

use App\Repository\TruckRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TruckRepository::class)]
#[ORM\Table(name: "trucks")]
class Truck extends Base
{
    #[ORM\Column(type: 'string', length: 255)]
    private $model;

    #[ORM\Column(name: 'license_plate', type: 'string', length: 50)]
    private $licensePlate;

    /**
     * @return string
     */
    public function getLicensePlate(): string
    {
        return $this->licensePlate;
    }

    /**
     * @param string $licensePlate
     */
    public function setLicensePlate(string $licensePlate): void
    {
        $this->licensePlate = $licensePlate;
    }

    /**
     * @return string
     */
    public function getModel(): string
    {
        return $this->model;
    }

    /**
     * @param string $model
     */
    public function setModel(string $model): void
    {
        $this->model = $model;
    }
}
