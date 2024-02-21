import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
//import { FormBuscarPokemon } from '../../models/form-buscar-pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit {
  /*
  pokemons: (
    | {
        id: number,
        nombre: string,
        img: string,
        categoria: string,
        tipo: [string, string],
        talla: string,
        peso: string,
    }
    | {
      id: number,
      nombre: string,
      img: string,
      categoria: string,
      tipo: [string, string],
      talla: string,
      peso: number
    };
  ) [] = [];
  */

  pokemons = [
    {
      id: 0,
      nombre: '',
      img: '',
      categoria: '',
      tipo: ['', ''],
      talla: 0,
      peso: 0,
    },
  ];

  cuenta = 0;
  pokemonSeleccionado: string = '';  // Agrega esta línea para definir la propiedad

  //formBuscarPokemon = new FormBuscarPokemon('');

  constructor(private servicePokemons: PokemonsService) {}

  ngOnInit() {
    this.pokemons = this.servicePokemons.getPokemons();
    this.cuenta = this.servicePokemons.contarPokemons();
  }

  /*
  buscar(nombreDelPokemon: string) {
    this.pokemons = this.servicePokemons.buscarPokemon(nombreDelPokemon);
  }

  cancelarBuscar() {
    this.pokemons = this.servicePokemons.getPokemons();
    this.formBuscarPokemon.setNombre('');
  }
  */
}
