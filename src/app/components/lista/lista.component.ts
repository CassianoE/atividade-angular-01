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
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [NgFor, CommonModule, MdbModalModule, FormsModule, MdbFormsModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss',
})
export class ListaComponent {
  @Input() itens: any[]; // Defina a propriedade de entrada editoras
  @Input('nomeDaLista') nomeDaLista: string = '';
  idItemSalvar!: number;
  campoAtualizado: string = '';
  indiceAtualizando!: number;
  campoNovo: string = '';
  constructor() {
    this.itens = [];
  }

  modalService = inject(MdbModalService); // conseguir abrir a modal pelo TS
  @ViewChild('modal') modalDetalhe!: TemplateRef<any>; //enxergar o bloco de html da modal
  @ViewChild('modalnovo') modalnovo!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>; //conseguir fechar a modal aberta pelo TS

  deleteById(id: number ) {
    let indice = this.itens.findIndex((x) => {
      return x.id === id;
    });
    this.itens.splice(indice, 1);
  }

  abrirModalEditar(id: number ) {
    //abre modal passando o id do item a ser editado
    this.idItemSalvar = id;
    this.modalRef = this.modalService.open(this.modalDetalhe);
  }

  abrirModalNovo() {
    this.modalRef = this.modalService.open(this.modalnovo);
  }
  salvarItem() {
  
    this.itens.push({ id: this.itens[this.itens.length - 1].id + 1, nome: this.campoNovo });
    this.modalRef.close();
    this.campoNovo = '';
  }

  novoItem() {
    this.itens.push({ id: this.idItemSalvar, nome: this.campoAtualizado });
    this.modalRef.close();
    this.idItemSalvar = 0;
  }
  AtualizarItem(id: number ) {
    let indice = this.itens.findIndex(x => x.id === id)

    this.indiceAtualizando = indice;

    
    if (this.itens[indice]) {
      this.itens[indice].nome = this.campoAtualizado;
    }
    this.campoAtualizado = '';
    this.modalRef.close();
  }
}
