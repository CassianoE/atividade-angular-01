import {
  Component,
  Input,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';
import { EditoralistComponent } from '../editora/editoralist/editoralist.component';
import { CommonModule, NgFor } from '@angular/common';
import {
  MdbModalModule,
  MdbModalRef,
  MdbModalService,
} from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [EditoralistComponent, NgFor, CommonModule, MdbModalModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss',
})
export class ListaComponent {
  @Input() data: any[]; // Defina a propriedade de entrada editoras
  @Input('nomeDaLista') nomeDaLista: string = '';
  constructor() {
    this.data = []; // Inicialize a propriedade editoras no construtor
  }

  modalService = inject(MdbModalService); // conseguir abrir a modal pelo TS
  @ViewChild('modal') modalDetalhe!: TemplateRef<any>; //enxergar o bloco de html da modal
  modalRef!: MdbModalRef<any>; //conseguir fechar a modal aberta pelo TS

  abrirModalEditar() {
    this.modalRef = this.modalService.open(this.modalDetalhe);
  }

  salvarItem() {}
}
