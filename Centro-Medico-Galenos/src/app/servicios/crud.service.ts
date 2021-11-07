import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  url = 'https://matiiglesias77.pythonanywhere.com/api/usuarios/'

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : 'Token a563c4017b524fcf99eb2d965c13bc3bc873f749'
    })
  }

  constructor( public http: HttpClient) { }

  getUsuarios(){
    return new Promise(resolve =>{
      this.http.get(this.url, this.httpOptions).subscribe(data=>{
        resolve(data);
      }, err=>{
        console.log(err)
      })
    })  
  }

  postUsuario(data){
    return new Promise((resolve, reject) =>{
      this.http.post(this.url, JSON.stringify(data))
      .subscribe(response =>{
        resolve(response);
      }, (error)=>{
        reject(error);
      });
    });
  }
}
