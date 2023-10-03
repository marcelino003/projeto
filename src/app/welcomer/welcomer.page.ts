import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, } from '@ionic/angular'; 


@Component({
  selector: 'welcomer',
  templateUrl: './welcomer.page.html',
  styleUrls: ['./welcomer.page.scss'],
})
export class WelcomerPage implements OnInit {
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
