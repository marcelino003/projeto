import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { APP_CONFIG, AppConfig } from '../app.config'; 
import { BuyappalertPage } from '../buyappalert/buyappalert.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private navCtrl: NavController, private route: Router,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  profile() {
    this.route.navigate(['./my-profile']);
  }
  thumb_impression() {
    this.route.navigate(['./thumb-impression']);
  }
  nearby_bank() {
    this.route.navigate(['./nearby-bank-atm']);
  }
  change_language() {
    this.route.navigate(['./change-language']);
  }
  terms_conditions() {
    this.route.navigate(['./terms-conditions']);
  }
  faqs() {
    this.route.navigate(['./faqs']);
  }
  support() {
    this.route.navigate(['./support']);
  }
  // sing_in() {
  //   this.navCtrl.navigateRoot(['./sign-in']);
  // }

  welcomer() {
    this.navCtrl.navigateRoot(['./welcomer']);
  }
  // buyappalert() {
  //   window.open("http://bit.ly/cc_OpusBanking", '_system', 'location=no');
  // }

  buyappalert() {
    this.modalController.create({ component: BuyappalertPage }).then((modalElement) => modalElement.present());
  } 

  developed_by() {
    window.open('https://opuslab.works', '_system', 'location=no')
  }
}
