import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Error } from './pages/error/error';
import { Books } from './pages/books/books';
import { AddBook } from './pages/add-book/add-book';
import { ProfilBook } from './pages/profil-book/profil-book';
import { EditBook } from './pages/edit-book/edit-book';

export const routes: Routes = [
    {   
        path: 'home',
        component: Home,
        title: "Accueil"
    },
    {
        path: 'books',
        component: Books,
        title: 'Ma collection de livre'
    },
    {
        path: 'addBook',
        component: AddBook,
        title: 'Ajouter un livre'
    },
    {
        path: 'book/:id',
        component: ProfilBook,
        title: "Profil du livre"
    },
    {
        path: 'book/edit/:id',
        component: EditBook,
        title: "Editer un livre"
    },
    {
        path:'',
        redirectTo: 'home',
        pathMatch:'full'
    },
    {
        path: '**',
        component: Error,
        title: 'Page d erreur'
    }



];
