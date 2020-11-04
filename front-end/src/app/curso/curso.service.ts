import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

    private server = environment.apiServer

  constructor(private http : HttpClient) { }

    listar(){
        this.http.get('${server}curso').toPromise()
    }

}
