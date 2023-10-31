import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'form', component: FormComponent }, // Usando o mesmo componente para a raiz e "/form"
  // Outras rotas conforme necessário
];
@NgModule({
  imports: [RouterModule.forRoot(routes)], // Certifique-se de que o RouterModule seja importado aqui
  exports: [RouterModule],
})
export class AppRoutingModule {}