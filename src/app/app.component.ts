import { Component, OnInit } from '@angular/core';

declare let mostrar: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  ngOnInit(): void {
    
  }

  mostrarMensagem(){
    mostrar("mensagem...");
  }
}
