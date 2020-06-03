import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-porduto-component',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.html']
})
export class ProdutoComponent implements OnInit {

  public produto: string[];

  ngOnInit(): void {
    this.produto = ["Mouse", "Teclado", "Monitor", "CPU", "GPU", "SSD"];
  }


}
