import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit, OnChanges {
	@Input() nome: string = '';
  constructor(){}

  ngOnInit(): void {
    console.log("I'm on init")
		this.nome = this.nome + 'x'
  }

  ngOnChanges(): void {
		console.log("on change")
  }
}
