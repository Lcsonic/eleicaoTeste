import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.scss'],
})
export class CandidatosComponent implements OnInit {

  candidatos: any[] = []; 
  
  constructor() { }

  ngOnInit() {}

  cardClick(valor){
    alert('CLicou em:' +valor.nome)
  }


  carregar () {

      this.candidatos = [
      {nome: 'Matheus Maia', setor: 'Senai', imagem:"https://api.adorable.io/avatars/200/matheusmaia.png"},
      {nome: 'Maicon Bruno', setor: 'Coxinha', imagem:"https://api.adorable.io/avatars/200/maiconbruno.png"},
      {nome: 'Paulo Reis', setor: 'IrdeB', imagem:"https://api.adorable.io/avatars/200/pauloreis.png"},
      {nome: 'Fernanda Castro', setor: 'Senai', imagem:"https://api.adorable.io/avatars/200/fernandacastro.png"},
      {nome: 'Walter Moises', setor: 'Senai', imagem:"https://api.adorable.io/avatars/200/waltermoises.png"},
    ];
  }
}
