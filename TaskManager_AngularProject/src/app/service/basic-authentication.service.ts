import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticatedUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  executeJWTAuthenticationService(username, password) {

    
    return this.http.post<any>(`${API_URL}/authenticate`,{
    username,
    password
    }).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return data;
          }
        )
      );
    //console.log("Execute hello wolrd bean service")

  }


  authenticate(username, password) {
    console.log('Before calling' + this.isUserLoggedIn());
    if (username === "Pratiksha" && password === "dummy") {
      sessionStorage.setItem('authenticatedUser', username);
      console.log('After calling' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  executeAuthenticationService(username, password) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);


    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    }

    )
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,
      { headers })
      .pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
          }
        )
      );
    //console.log("Execute hello wolrd bean service")

  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)

  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN)
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }
}

export class AuthenticationBean {
  constructor(
    public message: string
  ) { }
}
