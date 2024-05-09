import { Component } from '@angular/core';
import { MenuComponent } from '../../menu/menu.component';

@Component({
  selector: 'app-editoralist',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './editoralist.component.html',
  styleUrl: './editoralist.component.scss',
})
export class EditoralistComponent {}
