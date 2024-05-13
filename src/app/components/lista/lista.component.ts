import {
  Component,
  Input,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';

import { CommonModule, NgFor } from '@angular/common';
import {
  MdbModalModule,
  MdbModalRef,
  MdbModalService,
} from 'mdb-angular-ui-kit/modal';
import { Data } from '@angular/router';
import { Livro } from '../../models/livro/livro';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [NgFor, CommonModule, MdbModalModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss',
})
export class ListaComponent {
  @Input() data: any[]; // Defina a propriedade de entrada editoras
  @Input('nomeDaLista') nomeDaLista: string = '';
  constructor() {
    this.data = [];
  }

  modalService = inject(MdbModalService); // conseguir abrir a modal pelo TS
  @ViewChild('modal') modalDetalhe!: TemplateRef<any>; //enxergar o bloco de html da modal
  modalRef!: MdbModalRef<any>; //conseguir fechar a modal aberta pelo TS

  deleteById(data: { id: number }) {
    let indice = this.data.findIndex((x) => {
      return x.id === data.id;
    });
    this.data.splice(indice, 1);
  }

  abrirModalEditar() {
    this.modalRef = this.modalService.open(this.modalDetalhe);
  }

  AtualizarItem() {
    // Fechar a modal
    this.modalRef.close();
  }
}
