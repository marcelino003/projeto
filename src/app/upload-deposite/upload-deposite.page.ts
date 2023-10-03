import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'
@Component({
  selector: 'app-upload-deposite',
  templateUrl: './upload-deposite.page.html',
  styleUrls: ['./upload-deposite.page.scss'],
})
export class UploadDepositePage implements OnInit {

  constructor(private navCtrl: NavController ) { }

  ngOnInit() {
  }

  save() {
     this.navCtrl.pop();
  }
}
