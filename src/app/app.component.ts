import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NovoBoletoComponent } from "./novo-boleto/novo-boleto.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NovoBoletoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
