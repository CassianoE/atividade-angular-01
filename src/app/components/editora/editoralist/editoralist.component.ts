import { Component } from '@angular/core';
import { MenuComponent } from '../../menu/menu.component';
import { ListaComponent } from '../../lista/lista.component';

@Component({
  selector: 'app-editoralist',
  standalone: true,
  imports: [MenuComponent, ListaComponent],
  templateUrl: './editoralist.component.html',
  styleUrl: './editoralist.component.scss',
})
export class EditoralistComponent {
  editoras = [
    { id: 1, nome: 'Editora Abril' },
    { id: 2, nome: 'Editora Record' },
    { id: 3, nome: 'Editora Nova Fronteira' },
    // Adicione mais editoras conforme necessário
  ];
}
