import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {

  

  req = req.clone({
    setHeaders: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGUwMmI5NWQ0MTAyYWZkZDI3ZTA1ZmRhMzAxNjVkMyIsIm5iZiI6MTczNzM4MzQ1OC42ODUsInN1YiI6IjY3OGU1ZTIyMWMzNDFjODg5OTZkZTk2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ksjZpCaW7QAU2-ruF1UumvqQdq300x1J1SVo6isTYGA',
      accept: 'application/json',
    },
  });
  return next(req);
};
