import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import {Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { RouterModule } from '@angular/router';


export const ROUTES: Routes =[
    {path: '', component:HomeComponent},
    {path: 'login', component:LoginComponent}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES); 