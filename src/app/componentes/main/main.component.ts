import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  main_modal: boolean; /* Variable para mostrar la pantalla modal */
  
  close_modal():void {
    this.main_modal = false;
  }

  mostrar_comentario: boolean = false; /* Variable para el cambio de vlr booleano en la img */
  change_foco: string = 'assets/img/luzoff.png'; /* Variable que cambia el estado de la img bombillo */
  width_progress: number;

  cambio_boton: boolean = true;
  contador_on: number = 0; /* Variable para inicializar un contador */

  contador(): void {
    this.change_foco = 'assets/img/luzon.png';
    this.cambio_boton = false;
    this.contador_on++;

    if (this.contador_on === 1) {
      this.width_progress = 10;
    }

    else if(this.contador_on === 3) {
      this.mostrar_comentario = true; 
      this.width_progress = 30;
    }

    else if(this.contador_on === 5) {
      this.mostrar_comentario = false; 
      this.width_progress = 50;
    } 

    else if(this.contador_on === 7) {
      this.mostrar_comentario = true; 
      this.width_progress = 70;
    }
    
    else if (this.contador_on === 9) {
      this.width_progress = 100;
    }

    else if(this.contador_on === 10) {
      this.main_modal = true;
      this.mostrar_comentario = false;
      this.change_foco = 'assets/img/luzoff.png';
      this.cambio_boton = true;
      this.contador_on = 0;
      this.width_progress = 0;
    }
  }

  stop_off(): void {
    this.mostrar_comentario = false;
    this.change_foco = 'assets/img/luzoff.png';
    this.cambio_boton = true;
  }

}
