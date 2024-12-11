import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  standalone: false,
  template: `
    <div class="spinner-overlay">
      <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  `,
  styles: [`
    .spinner-overlay {
      position: fixed; 
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999; 
    }
  `]
})
export class SpinnerComponent { }