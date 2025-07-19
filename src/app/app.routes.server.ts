import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'movieDetails/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: 'seriesDetails/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: 'gen/:grnName/:type/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
