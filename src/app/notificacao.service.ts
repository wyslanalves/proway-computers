
import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';




@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(
    private snacBar: MatSnackBar
  ) { }

    snackBarConfig: MatSnackBarConfig = {
    duration: 2000, // Duração em milissegundos
    panelClass: ['custom-snackbar'], // Classe personalizada para estilos
    horizontalPosition: 'right',
    verticalPosition: 'bottom'
  };



  notificar(mensagem: string){
    this.snacBar.open(mensagem,"Ok", this.snackBarConfig)
  }
}
