import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

import {  Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  error: any;

  constructor(public af: AngularFireAuth,private router: Router) {
    //this.af.authState.subscribe(auth => { 
    //  if(auth) {
    ////    this.router.navigateByUrl('/dashboard');
    //  }
   // });
    
   }
 
  login (){
    var provider=new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.af.auth.signInWithPopup(provider).then(
      (success)=> {
        this.router.navigateByUrl('/dashboard')
      }
    ).catch(
      (err)=>{
        this.error=err;
      }
    )

  }
  logout() {
    this.af.auth.signOut().then(
      (success)=>{
        this.router.navigateByUrl('/home')
      }
    ).catch(
      (error)=>{
        this.error=error;
      }
    );
  }
  ngOnInit() {
  }

}
