<?php

namespace App\DataFixtures;

use App\Entity\Truck;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class TruckFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create();

        $models = array(
            "Ford F-150",
            "Chevrolet Silverado",
            "Ram 1500",
            "Toyota Tundra",
            "GMC Sierra",
            "Nissan Titan",
            "Honda Ridgeline",
            "Jeep Gladiator",
            "Ford F-250",
            "GMC Canyon"
        );

        foreach ($models as $model) {
            $truck = new Truck();

            $truck->setModel($model);
            $truck->setLicensePlate($faker->unique()->bothify('??###??'));

            $manager->persist($truck);
        }

        $manager->flush();
    }
}
