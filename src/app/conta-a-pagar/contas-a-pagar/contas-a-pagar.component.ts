import { ContaAPagarDTO } from './../conta-a-pagarDTO';
import { MatTableDataSource } from '@angular/material/table';
import { ContaAPagarService } from './../conta-a-pagar.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { BehaviorSubject } from 'rxjs';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-contas-a-pagar',
  templateUrl: './contas-a-pagar.component.html',
  styleUrls: ['./contas-a-pagar.component.css']
})
export class ContasAPagarComponent implements OnInit {

  constructor(private contaService: ContaAPagarService) { }
  dataSource: MatTableDataSource<ContaAPagarDTO>;
  private contasAPagar: ContaAPagarDTO[];
  total: number;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['Codigo', 'Titulo', 'Categoria',  'Valor', 'Data Vencimento', 'Data Pagamento', 'Indicador Pagamento', 'Ações'];

  ngOnInit(): void {
    this.contaService.listar().subscribe(dados => {
      (this.contasAPagar = dados);
      this.dataSource = new MatTableDataSource(this.contasAPagar);
      this.dataSource.paginator = this.paginator;
    });
  }


  editarConta(conta: ContaAPagarDTO) {
    console.log(conta);
  }

  excluirConta(conta: ContaAPagarDTO) {
    console.log(conta);
  }

  calcularTotal() {
    return this.contasAPagar.reduce((acumulado, conta) => acumulado + conta.valor, 0);
  }
}
