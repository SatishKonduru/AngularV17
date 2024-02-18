import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  person = {
    age: 16,
    place: 'Nandyal',
    pin: 518502
  }
  x = 10;
  y = 20;
  sum(){
    return (this.x+this.y + 100)
  }
}
