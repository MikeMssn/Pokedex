import { Component } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PokeDex';
  searchEvent: any;
}
