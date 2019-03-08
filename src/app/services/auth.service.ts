import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import * as firebase from 'firebase';
import { FirebaseAuth } from '@angular/fire';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  


  login (){
    var provider=new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then(function(result){
        var user=result.user
        console.log(user)
    });
    
  }
  constructor() { }
}
