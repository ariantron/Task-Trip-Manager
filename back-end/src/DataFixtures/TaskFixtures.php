<?php

namespace App\DataFixtures;

use App\Entity\Task;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class TaskFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create();

        for ($i = 0; $i < 50; $i++) {
            $task = new Task();
            $task->setTitle($faker->sentence(3));
            $task->setDescription($faker->paragraph);

            $manager->persist($task);
        }

        $manager->flush();
    }
}
