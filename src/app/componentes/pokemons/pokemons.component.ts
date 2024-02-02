// Importación del decorador Component y OnInit desde Angular core
import { Component, OnInit } from '@angular/core';

// Decorador Component con metadatos que definen el componente
@Component({
  // Selector del componente, cómo será llamado en otros archivos HTML
  selector: 'app-pokemons',

  // Ruta al archivo HTML que define la estructura del componente
  templateUrl: './pokemons.component.html',

  // Ruta al archivo de estilos del componente
  styleUrls: ['./pokemons.component.css'],
})
// Clase del componente que implementa la interfaz OnInit
export class PokemonsComponent implements OnInit {
  // Array de Pokémon con los datos proporcionados
  pokemons = [
    {
      id: 1,
      nombre: 'Bulbasaur',
      categoria: undefined, // Categoría no especificada inicialmente
      tipo: 'Planta y Venenosa',
      talla: 0.7, // Altura en metros
      peso: 6.9, // Peso en kilogramos
    },
    {
      id: 2,
      nombre: 'Ivysaur',
      categoria: undefined, // Categoría no especificada inicialmente
      tipo: 'Planta y Venenosa',
      talla: 1, // Altura en metros
      peso: 13, // Peso en kilogramos
    },
    {
      id: 3,
      nombre: 'Venusaur',
      categoria: undefined, // Categoría no especificada inicialmente
      tipo: 'Planta y Venenosa',
      talla: 2, // Altura en metros
      peso: 100, // Peso en kilogramos
    },
    {
      id: 4,
      nombre: 'Charmander',
      categoria: 'Lagarto', // Categoría especificada
      tipo: 'Fuego',
      talla: 0.6, // Altura en metros
      peso: 8.5, // Peso en kilogramos
    },
    {
      id: 5,
      nombre: 'Charmaleon',
      categoria: undefined, // Categoría no especificada inicialmente
      tipo: 'Fuego',
      talla: 1.1, // Altura en metros
      peso: 19, // Peso en kilogramos
    },
    {
      id: 6,
      nombre: 'Charizard',
      categoria: undefined, // Categoría no especificada inicialmente
      tipo: 'Fuego y Vuelo',
      talla: 1.7, // Altura en metros
      peso: 90.5, // Peso en kilogramos
    },
  ];

  // Constructor del componente
  constructor() {}

  // Método OnInit que se ejecuta cuando el componente se inicializa
  ngOnInit() {}
}
