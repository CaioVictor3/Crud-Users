import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: User = {
    name: 'Caio',
    email: 'caio@gmail.com',
    sector: 'TI',
    role: 'Admin',
    firebaseId: '123',
    healthPlan: 'Amil',
    dentalPlan: 'OralSaude'
  };


  constructor(private dataBaseStore: AngularFirestore) { }
  getAllUsers(){
    return this.dataBaseStore.collection('users', ref => ref.orderBy('name')).valueChanges({ idField: 'firebaseId' }) as Observable<any[]>;
  }

  addUser(user: User){
    return this.dataBaseStore.collection('users').add(user);
  }

  updateUser(userId: string, user: User){
    return this.dataBaseStore.collection('users').doc(userId).update(user);
  }

  deleteUser(userId: string){
    return this.dataBaseStore.collection('users').doc(userId).delete();
  }

  

}
