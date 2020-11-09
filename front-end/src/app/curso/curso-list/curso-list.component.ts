import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.scss']
})
export class CursoListComponent implements OnInit {

    cursos: any = [] // Vetor vazio

    displayedColumns : string[] = ['nome','carga_horaria','nivel','valor_curso']

  constructor(private cursoSrv : CursoService) { }

   async ngOnInit() {
      return this.cursos = await this.cursoSrv.listar()
      console.log(this.cursos)
  }

}
