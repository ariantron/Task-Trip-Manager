<?php

declare(strict_types=1);

namespace App\Controller;

use App\Repository\TruckRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class TruckController extends AbstractController
{
    private TruckRepository $truckRepository;

    /**
     * @param TruckRepository $truckRepository
     */
    public function __construct(TruckRepository $truckRepository)
    {
        $this->truckRepository = $truckRepository;
    }

    #[Route('/trucks', methods: ['GET'])]
    public function index(Request $request): Response
    {
        return $this->json(
            $this->truckRepository->findByQuery($request->query->all())
        );
    }

    #[Route('/trucks/{id}', methods: ['GET'])]
    public function show(string $id): Response
    {
        $truck = $this->truckRepository->find($id);

        if (!$truck) {
            throw $this->createNotFoundException('Truck not found');
        }

        return $this->json($truck);
    }
}
