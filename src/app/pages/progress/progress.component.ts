import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent {

  progreso1:number = 25;
  progreso2:number = 35;

  get getProceso1(){
    return `${this.progreso1}%`
  }

  get getProceso2(){
    return `${this.progreso2}%`
  }

  cambioValorHijo(valor: number){
    console.log('Hey', valor);
  }

}
