import {Injectable, Injector} from '@angular/core';
import {HttpErrorResponse, HttpInterceptor} from '@angular/common/http';
import {AuthService} from './auth.service';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) {
  }

  intercept(req, next) {
    let authService = this.injector.get(AuthService);
    let tokenizedReq = req.clone({});
    if (authService.loggedIn()) {
      tokenizedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authService.getToken()}`,
        }
      });
    }
    return next.handle(tokenizedReq).do(
      () => {
      },
      (error: any) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401 && !authService.verifiying) {
            console.log('got error');
            authService.verifyToken();
          }
        }
      }
    );

  }
}
