import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.page.html',
  styleUrls: ['./loans.page.scss'],
})
export class LoansPage implements OnInit {
  constructor(private route: Router) { }

  ngOnInit() {
  }

  loan_statement() {
    this.route.navigate(['./loan-statement']);
  }   
  
 loan_info() {
    this.route.navigate(['./loan-info']);
  } 
}
