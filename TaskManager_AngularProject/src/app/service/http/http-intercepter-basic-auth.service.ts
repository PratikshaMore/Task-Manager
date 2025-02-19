import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    // let username = 'Pratiksha'
    // let password = 'dummy'
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
   let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
   let username = this.basicAuthenticationService.getAuthenticatedUser();


   if(basicAuthHeaderString && username){
    request = request.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    }

    )
  }
    return next.handle(request);

  }
}
