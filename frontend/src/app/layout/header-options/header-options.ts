import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon'
import {MatButton, MatIconButton} from '@angular/material/button'
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-header-options',
  imports: [MatIcon, MatButton, MatIconButton, RouterLink],
  template: `
    <div class="flex items-center gap-2">
      <button matIconButton routerLink="/deseos">
        <mat-icon>favorite</mat-icon>
      </button>
      <button matIconButton>
        <mat-icon>shopping_cart</mat-icon>
      </button>
      <button matButton="outlined">Iniciar Sesion</button>
      <button matButton="filled">Registrarse</button>
    </div>
  `,
  styles: ``,
})
export class HeaderOptions {

}
