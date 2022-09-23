import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-composto',
  templateUrl: './juros-composto.component.html',
  styleUrls: ['./juros-composto.component.css'],
})
export class JurosCompostoComponent implements OnInit {
  constructor() {}

  @Input() c: String;
  @Input() tx: String;
  @Input() time: String;

  ngOnInit() {}

  convertTaxa() {
    return 1 + Number(this.tx) / 100;
  }

  elevado() {
    return this.convertTaxa() ** Number(this.time);
  }

  acumulado() {
    return Number(this.c) * this.elevado();
  }
}
