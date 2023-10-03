import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'
@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.page.html',
  styleUrls: ['./add-beneficiary.page.scss'],
})
export class AddBeneficiaryPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }


  save() {
    this.navCtrl.pop();
  }

}
