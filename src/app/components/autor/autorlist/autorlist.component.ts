import { Component } from '@angular/core';
import { MenuComponent } from '../../menu/menu.component';

@Component({
  selector: 'app-autorlist',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './autorlist.component.html',
  styleUrl: './autorlist.component.scss',
})
export class AutorlistComponent {}
