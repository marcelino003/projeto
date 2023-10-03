import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-thumb-impression',
  templateUrl: './thumb-impression.page.html',
  styleUrls: ['./thumb-impression.page.scss'],
})
export class ThumbImpressionPage implements OnInit {
  clickCounter = 0;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  

  handleClick() {
    this.clickCounter++;
    if (this.clickCounter === 3) {
      this.navCtrl.navigateRoot(['./tabs']);
      this.clickCounter = 0;
    }
  }
}
