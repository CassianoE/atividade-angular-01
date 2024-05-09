import { Component } from '@angular/core';
import { MenuComponent } from '../../menu/menu.component';

@Component({
  selector: 'app-livrolist',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './livrolist.component.html',
  styleUrl: './livrolist.component.scss',
})
export class LivrolistComponent {}
