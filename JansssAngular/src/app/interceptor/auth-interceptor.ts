import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    // retrieving the JWT string from Local Storage directly
    const token = localStorage.getItem('token');

    // if the JWT is present, then we will clone the HTTP headers, and add an extra Authorization header
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization',
          'Bearer ' + token)
      });

      return next.handle(cloned);
     // if the JWT is not present, then the request goes through to the server unmodified
    } else {
      return next.handle(req);
    }
  }
}
