import { Component, OnInit } from '@angular/core';
import { Carro } from './Carro';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class CarroComponent implements OnInit {
  carro: Carro = {
    id: 1,
    tipo: 'popular',
    nome: 'Corsa',
    marca: 'Chevrolet',
    ano: 2006,
  };

  constructor() {}
  ngOnInit(): void {}
}
