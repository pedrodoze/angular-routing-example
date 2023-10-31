import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; // Certifique-se de importar o DataService corretamente.

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  dataFromServer: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getDataFromServer().subscribe(
      (data) => {
        this.dataFromServer = data;
        console.log('Dados do servidor recebidos com sucesso:', data);
      },
      (error) => {
        console.error('Erro ao recuperar dados do servidor:', error);
        // Realize ações de tratamento de erro, se necessário.
      }
    );
  }
}
