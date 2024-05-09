import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { EditoralistComponent } from './components/editora/editoralist/editoralist.component';
import { Component } from '@angular/core';
import { EditoradetailsComponent } from './components/editora/editoradetails/editoradetails.component';
import { AutordetailsComponent } from './components/autor/autordetails/autordetails.component';
import { LivrolistComponent } from './components/livro/livrolist/livrolist.component';
import { AutorlistComponent } from './components/autor/autorlist/autorlist.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'editoras', component: EditoralistComponent },
  { path: 'autores', component: AutorlistComponent },
  { path: 'livros', component: LivrolistComponent },
];
