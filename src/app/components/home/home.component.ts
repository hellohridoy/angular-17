import { Component } from '@angular/core';

@Component({
  //selector: 'app-home',
  //selector: '[app-home]:not(p)', //now this not working for paragraph tag
  selector: 'app-home,[app-home]',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
