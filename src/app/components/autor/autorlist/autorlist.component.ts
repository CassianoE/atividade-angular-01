import { Component } from '@angular/core';
import { MenuComponent } from '../../menu/menu.component';
import { ListaComponent } from '../../lista/lista.component';

@Component({
  selector: 'app-autorlist',
  standalone: true,
  imports: [MenuComponent, ListaComponent],
  templateUrl: './autorlist.component.html',
  styleUrl: './autorlist.component.scss',
})
export class AutorlistComponent {
  autores = [
    { id: 1, nome: 'Machado de Assis' },
    { id: 2, nome: 'Jorge Amado' },
    { id: 3, nome: 'Clarice Lispector' },
  ];
}
