import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListarVagasComponent } from './vagas/listar-vagas/listar-vagas.component';
import { CadastrarVagasComponent } from './vagas/cadastrar-vagas/cadastrar-vagas.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListarVagasComponent,
    CadastrarVagasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
