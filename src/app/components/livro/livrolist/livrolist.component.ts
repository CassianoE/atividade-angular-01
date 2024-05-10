import { Component } from '@angular/core';
import { MenuComponent } from '../../menu/menu.component';
import { ListaComponent } from '../../lista/lista.component';
@Component({
  selector: 'app-livrolist',
  standalone: true,
  imports: [MenuComponent, ListaComponent],
  templateUrl: './livrolist.component.html',
  styleUrl: './livrolist.component.scss',
})
export class LivrolistComponent {
  livros = [
    { id: 1, nome: 'Memórias Póstumas de Brás Cubas' },
    { id: 2, nome: 'Gabriela, Cravo e Canela' },
    { id: 3, nome: 'A Hora da Estrela' },
  ];
}
