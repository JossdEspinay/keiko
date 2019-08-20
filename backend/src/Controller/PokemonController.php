<?php
namespace App\Controller;
use App\Entity\Pokemon;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Exception\ExceptionInterface;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Serializer\SerializerInterface;

class PokemonController
{
    /**
     * @var NormalizerInterface
     */
    private $normalizer;
    /**
     * @var EntityManagerInterface
     */
    private $entityManager;
    /**
     * @var SerializerInterface
     */
    private $serializer;
    /**
     * @param NormalizerInterface    $normalizer
     * @param EntityManagerInterface $entityManager
     * @param SerializerInterface    $serializer
     */
    public function __construct(
        NormalizerInterface $normalizer,
        EntityManagerInterface $entityManager,
        SerializerInterface $serializer
    ) {
        $this->normalizer = $normalizer;
        $this->entityManager = $entityManager;
        $this->serializer = $serializer;
    }

    /**
     * @Route("/pokemon", methods={"GET"})
     * @return JsonResponse
     * @throws ExceptionInterface
     */
    public function get(): JsonResponse
    {
        $pokemonRepository = $this->entityManager->getRepository(Pokemon::class);
        $pokemons = $pokemonRepository->findAll();
        $response = $this->normalizer->normalize($pokemons, 'json');
        return new JsonResponse($response);
    }

    /**
     * @Route("/pokemon/{pokemonId}", methods={"GET"})
     * @param $pokemonId
     * @return JsonResponse
     * @throws ExceptionInterface
     */
    public function findOneById($pokemonId): JsonResponse
    {
        $pokemonRepository = $this->entityManager->getRepository(Pokemon::class);
        $pokemon = $pokemonRepository->findOneBy([
            'id' => $pokemonId,
        ]);
        $response = $this->normalizer->normalize($pokemon, 'json');
        return new JsonResponse($response);
    }


    /**
     * @Route("/pokemon", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     * @throws ExceptionInterface
     */
    public function create(Request $request): Response
    {

        $pokemon = $this->serializer->deserialize($request->getContent(), Pokemon::class, 'json');
        $this->entityManager->persist($pokemon);
        $this->entityManager->flush();
        $response = $this->normalizer->normalize($pokemon, 'json');
        return new JsonResponse($response);
    }

}