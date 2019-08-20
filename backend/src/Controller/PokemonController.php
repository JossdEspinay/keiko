<?php
namespace App\Controller;
use Symfony\Component\HttpFoundation\Response;
class PokemonController
{
    /**
     * @return Response
     */
    public function helloWorld(): Response
    {
        
        return new Response('Hello World');
    }
}