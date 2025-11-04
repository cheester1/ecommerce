import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar"
import { HeaderOptions } from "../header-options/header-options";

@Component({
  selector: 'app-header',
  imports: [MatToolbar, HeaderOptions],
  template: `
    <mat-toolbar class="w-full elevated py-2">
        <div class="max-w-[1200px] ms-auto w-full flex items-center justify-between">
          <span> Ecommerce </span>
          <app-header-options/>
        </div>
    </mat-toolbar>
  `,
  styles: ``,
})
export class Header {

}
