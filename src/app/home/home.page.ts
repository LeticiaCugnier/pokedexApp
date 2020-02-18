import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public listaPokemon = [
    {
      numero: 'N°001', nome: 'Bulbasaur', tipos: ['Grass', 'Poison'],
      img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' 
    },
    {
      numero: 'N°002', nome: 'Ivysaur', tipos: ['Grass', 'Poison'],
      img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png' 
    },
    {
      numero: 'N°003', nome: 'Venusaur', tipos: ['Grass', 'Poison'],
      img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png' 
    },
    {
      numero: 'N°004', nome: 'Charmander', tipos: ['Grass', 'Poison'],
      img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png' 
    },
    {
      numero: 'N°005', nome: 'Charmeleon', tipos: ['Fire'],
      img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png' 
    },
    {
      numero: 'N°006', nome: 'Charizard', tipos: ['Fire', 'Flying'],
      img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png' 
    },
    {
      numero: 'N°007', nome: 'Squirtle', tipos: ['Water'],
      img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png' 
    },
    {
      numero: 'N°008', nome: 'Wartortle', tipos: ['Water'],
      img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png' 
    },
    {
      numero: 'N°009', nome: 'Blastoise', tipos: ['Water'],
      img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png' 
    },
    {
      numero: 'N°025', nome: 'Pikachu', tipos: ['Water'],
      img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png' 
    },
    {
      numero: 'N°026', nome: 'Raichu', tipos: ['Electric'],
      img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png' 
    },
    {
      numero: 'Nº172', nome: 'Pichu', tipos: ['Electric'],
      img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png' 
    },

  ];
  public listaFiltrada = [];

  constructor() {}

}
