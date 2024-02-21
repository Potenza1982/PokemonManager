// Importación de funcionalidades necesarias desde Angular Core
import { Component, EventEmitter, Input, Output } from '@angular/core';

// Definición del componente con el selector, la plantilla y los estilos
@Component({
 selector: 'app-pokemon', // Selector que se usará para incluir este componente en otras plantillas
 templateUrl: './pokemon.component.html', // Ruta a la plantilla del componente
 styleUrls: ['./pokemon.component.css'] // Rutas a los estilos del componente
})
export class PokemonComponent {
 @Input() pokemon = { // Decorador de entrada que permite pasar datos al componente desde su contenedor
   'id': 0, // Identificador del Pokémon
   'nombre': '', // Nombre del Pokémon
   'img': '', // Ruta de la imagen del Pokémon
   'categoria': '', // Categoría del Pokémon
   'tipo': ['', ''], // Tipos del Pokémon
   'talla': 0, // Talla del Pokémon
   'peso': 0 // Peso del Pokémon
 };

 @Output() eventoClicImagen = new EventEmitter(); // Evento de salida que se emite al hacer clic en la imagen del Pokémon

 // Método que se ejecuta al hacer clic en la imagen del Pokémon
 clickEnImagen() {
   // Se emite el evento de clic en la imagen, enviando el nombre del Pokémon como dato
   this.eventoClicImagen.emit(this.pokemon.nombre);
 }
}
