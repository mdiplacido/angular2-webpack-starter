import { PostsComponent } from './posts/posts/posts.component';
import { SimpleBindingComponent } from './posts/simple-binding/simple-binding.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'simple-binding', component: SimpleBindingComponent },
  { path: 'posts', component: PostsComponent },
  {
    path: 'detail', loadChildren: () => System.import('./+detail').then((comp: any) => comp.default),
  },
  { path: '**', component: NoContentComponent },
];
