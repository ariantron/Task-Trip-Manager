<?php

declare(strict_types=1);

namespace App\Controller;

use App\Repository\TaskRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class TaskController extends AbstractController
{
    private TaskRepository $taskRepository;

    /**
     * @param TaskRepository $taskRepository
     */
    public function __construct(TaskRepository $taskRepository)
    {
        $this->taskRepository = $taskRepository;
    }

    #[Route('/tasks', methods: ['GET'])]
    public function index(Request $request): Response
    {
        return $this->json(
            $this->taskRepository->findByQuery($request->query->all())
        );
    }

    #[Route('/tasks/{id}', methods: ['GET'])]
    public function show(string $id): Response
    {
        $task = $this->taskRepository->find($id);

        if (!$task) {
            throw $this->createNotFoundException('Task not found');
        }

        return $this->json($task);
    }
}
