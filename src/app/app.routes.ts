import { Routes } from '@angular/router';
import { ArtistComponent } from './components/artist/artist.component';


import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';




 export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: '**', pathMatch:'full', redirectTo:'home' },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];


