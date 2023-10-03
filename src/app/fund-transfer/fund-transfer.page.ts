import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.page.html',
  styleUrls: ['./fund-transfer.page.scss'],
})
export class FundTransferPage implements OnInit {
  from_account: string = "1";
  constructor(private route: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  add_beneficiary() {
    this.route.navigate(['./add-beneficiary']);
  }
  transfered_successfully() {
    this.navCtrl.navigateRoot(['./transfered-successfully']);
  }

}
