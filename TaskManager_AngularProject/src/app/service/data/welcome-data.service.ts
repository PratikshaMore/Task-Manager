import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class HelloWorldBean{
   constructor(public message:string){}
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    //console.log("Execute hello wolrd bean service")

  }
  
  executeHelloWorldServiceWithPathVariable(name){
    // let basicAuthHeaderString= this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // }

    // )
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,
    //{headers}
    );
    //console.log("Execute hello wolrd bean service")

  }

  // createBasicAuthenticationHttpHeader(){
  //   let username = 'Pratiksha'
  //   let password = 'dummy'
  //   let basicAuthHeaderString = 'Basic '+ window.btoa(username +':' + password);
  //   return basicAuthHeaderString;
  // }
  //ccess to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/Pratiksha' from origin 'http://localhost:4200' 
}
