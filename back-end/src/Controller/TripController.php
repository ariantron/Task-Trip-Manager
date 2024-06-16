<?php

declare(strict_types=1);

namespace App\Controller;

use App\Repository\DriverRepository;
use App\Repository\TripRepository;
use App\Repository\TruckRepository;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;

class TripController extends AbstractController
{
    private TripRepository $tripRepository;
    private DriverRepository $driverRepository;
    private TruckRepository $truckRepository;

    /**
     * @param TripRepository $tripRepository
     * @param DriverRepository $driverRepository
     * @param TruckRepository $truckRepository
     */
    public function __construct(
        TripRepository   $tripRepository,
        DriverRepository $driverRepository,
        TruckRepository  $truckRepository
    )
    {
        $this->tripRepository = $tripRepository;
        $this->driverRepository = $driverRepository;
        $this->truckRepository = $truckRepository;
    }

    #[Route('/trips', methods: ['GET'])]
    public function index(Request $request): Response
    {
        return $this->json(
            $this->tripRepository->findByQuery($request->query->all()),
            context: [AbstractNormalizer::GROUPS => ['trip']]
        );
    }

    #[Route('/trips/{id}', methods: ['GET'])]
    public function show(string $id): Response
    {
        $trip = $this->tripRepository->find($id);

        if (!$trip) {
            throw $this->createNotFoundException('Trip not found');
        }

        return $this->json(
            $trip,
            context: [AbstractNormalizer::GROUPS => ['trip']]
        );
    }

    #[Route('/trips', methods: ['POST'])]
    public function store(Request $request): Response
    {
        $name = $request->request->get('name');
        $driverId = $request->request->get('driver_id');
        $truckId = $request->request->get('truck_id');

        $driver = $this->driverRepository->find($driverId);
        $truck = $this->truckRepository->find($truckId);

        if (empty($name)) {
            throw new Exception('Name cannot be empty');
        } elseif (is_null($driver)) {
            throw new Exception('Driver not found');
        } elseif (is_null($truck)) {
            throw new Exception('Trip not found');
        }

        $trip = $this->tripRepository->create($name, $driver, $truck);

        return $this->json(
            $trip,
            Response::HTTP_CREATED,
            context: [AbstractNormalizer::GROUPS => ['trip']]
        );
    }
}
