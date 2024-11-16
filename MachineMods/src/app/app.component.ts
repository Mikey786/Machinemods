import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MachinemodComponent } from "./machinemod/machinemod.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HttpClientModule } from '@angular/common/http'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MachinemodComponent, AboutComponent, RouterModule, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Machinemods';

}
