import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-machinemod',
  standalone: true,
  imports: [],
  templateUrl: './machinemod.component.html',
  styleUrl: './machinemod.component.css',
})
export class MachinemodComponent {
  title = 'sample';
  modificationLinks: { [key: string]: string } = {
    exhaust:
      'https://www.sparify.co/search?q=exhaust&_pos=1&_psq=exhaust&_ss=e&_v=1.0',
    tires: 'https://example.com/tires-parts',
    engine: 'https://example.com/engine-parts',
    brakes: 'https://example.com/brakes-parts',
  };

  constructor(private router: Router) {}

  // Method to navigate to the specific link
  navigateTomachinemod(featureId: string): void {
    const link = this.modificationLinks[featureId];
    if (link) {
      window.open(link, '_blank'); // Opens in a new tab
    } else {
      console.warn('No link found for this modification feature.');
    }
  }
}
