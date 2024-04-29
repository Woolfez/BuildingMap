import { Component } from '@angular/core';

@Component({
  selector: 'app-mappane',
  standalone: true,
  imports: [],
  templateUrl: './mappane.component.svg',
  styleUrl: './mappane.component.css'
})
export class MappaneComponent {
  fillColor = 'rgb(255, 0, 0)';

  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
}