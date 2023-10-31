import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  myForm: FormGroup;
  confirmationMessage: string = '';

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      console.log('Dados a serem enviados:', formData);
      this.dataService.sendDataToServer(formData).subscribe(
        (response) => {
          console.log('Dados enviados com sucesso:', response);
          this.confirmationMessage = 'Dados enviados com sucesso!';
          // Realize ações adicionais, se necessário
        },
        (error) => {
          console.error('Erro ao enviar dados:', error);
          // Realize ações de tratamento de erro, se necessário
        }
      );
    }
  }
}
