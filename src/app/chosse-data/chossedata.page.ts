import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'
@Component({
  selector: 'app-chosse-data',
  templateUrl: './chossedata.page.html',
  styleUrls: ['./chossedata.page.scss'],
})
export class ChossedataPage implements OnInit {

  constructor( private navCtrl: NavController ) { }

  ngOnInit() {
  }

  save() {
     this.navCtrl.pop();
  }
  
}
