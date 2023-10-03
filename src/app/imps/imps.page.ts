import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-imps',
  templateUrl: './imps.page.html',
  styleUrls: ['./imps.page.scss'],
})
export class ImpsPage implements OnInit {
  from_account: string = "1";
  constructor(private route: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  transfered_successfully() { 
    this.navCtrl.navigateRoot(['./transfered-successfully']);
  }
}
