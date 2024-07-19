import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {ReactiveFormsModule,  FormControl, FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { DatabaseService } from '../service/database.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-novo-boleto',
  standalone: true,
  imports: [CommonModule, FormsModule , ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './novo-boleto.component.html',
  styleUrl: './novo-boleto.component.css'
})
export class NovoBoletoComponent {
  public novoBoleto = new FormControl('');
  public tipoBoleto = new FormControl('');
  public padraoBuscaBoleto = new FormControl('');
  public padraoBuscaBoleto2 = new FormControl('');
  public x = new FormControl('');
  public y = new FormControl('');
  public regex = new FormControl('');
  public width = new FormControl('');
  public height = new FormControl('');
  public areaBusca = new FormControl('');
  public p = {};
  public itens: item[] = [];

  constructor(private database: DatabaseService){}

  envia(){
    const padrao:string|null = this.padraoBuscaBoleto.value;
    const res:payload = {
      nomeBoleto: this.novoBoleto.value,
      tipoBoleto: this.tipoBoleto.value,
      padraoIdentificadorBoleto: padrao?.trim().split(','),
      partes: this.itens
    }

    this.p = res;
    this.salva(res);
  }
  adiciona(){
    let x:string = this.x.value ? this.x.value : "-1";
    let y:string = this.y.value ? this.y.value : "-1";
    let w:string = this.width.value ? this.width.value : "-1";
    let h:string = this.height.value ? this.height.value : "-1";
    let it: item ={
      x: Number.parseInt(x),
      y: Number.parseInt(y),
      height: Number.parseInt(h),
      width: Number.parseInt(w),
      regex: this.regex.value == ""? null: this.regex.value,
      areaBusca: this.areaBusca.value == ""? null: this.areaBusca.value,
      padraoIdentificadorBoleto: this.padraoBuscaBoleto2.value == ""? null: this.padraoBuscaBoleto2.value
    }
    this.itens.push(it)
  }

  salva(payload: payload){
    this.database.novaConta(payload).subscribe(res =>{
      console.log(res)
    })
  }

}

export interface payload {
  nomeBoleto:string|null,
  tipoBoleto:string|null,
  padraoIdentificadorBoleto:string[] | undefined,
  partes: item[]
}

interface item{
  x: number | null,
  y: number | null,
  height: number | null,
  width: number | null,
  regex: string | null,
  areaBusca: string | null,
  padraoIdentificadorBoleto: string | null

}
