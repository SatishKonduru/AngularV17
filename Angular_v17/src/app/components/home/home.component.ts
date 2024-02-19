import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HooksComponent } from '../hooks/hooks.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HooksComponent, FormsModule, HighlightDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: []
})
export class HomeComponent {
  value = "From Home"
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

  onClick(e: any){
    this.value = e
  }
}
