import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.getToken();

  // never attach the token to login/register calls
  const isAuthCall = req.url.includes('/auth/');

  if (token && !isAuthCall) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      // expired or invalid token on a protected API -> log out
      if (err.status === 401 && !isAuthCall) {
        auth.logout();
      }
      return throwError(() => err);
    })
  );
};