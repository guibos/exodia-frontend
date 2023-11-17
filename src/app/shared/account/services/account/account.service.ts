import {Injectable} from '@angular/core';
import {catchError, concat, concatMap, map, Observable, of} from "rxjs";
import {AuthenticationStatus} from "../../classes/authenticationStatus/authentication-status";
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, private _cookieService: CookieService) {
  }

  login(username: string, password: string): Observable<AuthenticationStatus> {
    // if (!this.logged()){
    //   return this.logout().pipe(concatMap(() => this._login(username, password)))
    // } else {
    //   return this._login(username, password)
    // }
    return this._login(username, password)
  }
  private _login(username: string, password: string): Observable<AuthenticationStatus> {
    return this.http.post<any>(
      environment.account.loginURL,
      {"login": username, "password": password},
      {observe: 'response'}
    ).pipe(
      catchError((response: HttpErrorResponse) => {
        return of(new HttpResponse({body: response.message, status: response.status}))
      })
    ).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          return new AuthenticationStatus(true, $localize`:@@accountService.authentication.loginSuccessful:Authentication successful.`)
        } else if (response.status === 400) {
          return new AuthenticationStatus(false, $localize`:@@accountService.authentication.loginFailed:Username or password is invalid.`)
        } else {
          return new AuthenticationStatus(false, $localize`:@@accountService.authentication.loginUnexpected:Unexpected error.`)
        }
      })
    )
  }

  logout(): Observable<AuthenticationStatus> {
    return this.http.post<any>(
      environment.account.logoutURL,
      {},
      {observe: 'response'}
    ).pipe(
      catchError((response: HttpErrorResponse) => {
        return of(new HttpResponse({body: response.message, status: response.status}))
      })
    ).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          return new AuthenticationStatus(true, $localize`:@@accountService.authentication.successful:Logout successful.`)
        } else {
          return new AuthenticationStatus(false, $localize`:@@accountService.authentication.unexpected:Unexpected error.`)
        }
      })
    )
  }

  public logged(): boolean {
    return this.doesHttpOnlyCookieExist(environment.account.sessionCookie)
  }

  private doesHttpOnlyCookieExist(cookieName: string): boolean {
    let d = new Date();
    d.setTime(d.getTime() + (1000));
    let expires = "expires=" + d.toUTCString();

    document.cookie = cookieName + "=notAuth;path=/;" + expires;
    return document.cookie.indexOf(cookieName + '=') == -1;
}

}
