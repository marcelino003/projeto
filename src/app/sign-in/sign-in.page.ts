import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, } from '@ionic/angular'; 


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  constructor(private navCtrl: NavController, private route: Router) { }

  ngOnInit() {
  }
  tabs() {
    this.navCtrl.navigateRoot(['./tabs']);
  } 
  sign_up() {
    this.route.navigate(['./sign-up']);
  } 	

}
