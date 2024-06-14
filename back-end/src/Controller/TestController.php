<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class TestController extends AbstractController
{
    #[Route('/test', methods: ['GET'])]
    public function index(): Response
    {
        $projectDir = $this->getParameter('kernel.project_dir');
        dd($projectDir);
    }
}
