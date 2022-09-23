import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-simples',
  templateUrl: './juros-simples.component.html',
  styleUrls: ['./juros-simples.component.css'],
})
export class JurosSimplesComponent implements OnInit {
  constructor() {}
  @Input() c: String;
  @Input() tx: String;
  @Input() time: String;

  ngOnInit() {}

  convertPorcentagem() {
    return Number(this.tx) / 100;
  }

  jurosSimples() {
    return Number(this.c) * this.convertPorcentagem() * Number(this.time);
  }
}
