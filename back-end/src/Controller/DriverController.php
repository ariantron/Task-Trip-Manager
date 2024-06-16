<?php

declare(strict_types=1);

namespace App\Controller;

use App\Repository\DriverRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class DriverController extends AbstractController
{
    private DriverRepository $driverRepository;

    /**
     * @param DriverRepository $driverRepository
     */
    public function __construct(DriverRepository $driverRepository)
    {
        $this->driverRepository = $driverRepository;
    }

    #[Route('/drivers', methods: ['GET'])]
    public function index(Request $request): Response
    {
        return $this->json(
            $this->driverRepository->findByQuery($request->query->all())
        );
    }

    #[Route('/drivers/{id}', methods: ['GET'])]
    public function show(string $id): Response
    {
        $driver = $this->driverRepository->find($id);

        if (!$driver) {
            throw $this->createNotFoundException('Driver not found!');
        }

        return $this->json($driver);
    }
}
