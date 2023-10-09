import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in', 
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'welcomer',
    loadChildren: () => import('./welcomer/welcomer.module').then( m => m.WelcomerPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'transactions',
    loadChildren: () => import('./transactions/transactions.module').then( m => m.TransactionsPageModule)
  },
  {
    path: 'my-account',
    loadChildren: () => import('./my-account/my-account.module').then( m => m.MyAccountPageModule)
  },
  {
    path: 'vt-popup',
    loadChildren: () => import('./vt-popup/vt-popup.module').then( m => m.VtPopupPageModule)
  },
  {
    path: 'thumb-impression',
    loadChildren: () => import('./thumb-impression/thumb-impression.module').then( m => m.ThumbImpressionPageModule)
  },
  {
    path: 'add-token',
    loadChildren: () => import('./add-token/token.module').then( m => m.TokenPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'fund-transfer-options',
    loadChildren: () => import('./fund-transfer-options/fund-transfer-options.module').then( m => m.FundTransferOptionsPageModule)
  },
  {
    path: 'fund-transfer',
    loadChildren: () => import('./fund-transfer/fund-transfer.module').then( m => m.FundTransferPageModule)
  },
  {
    path: 'add-beneficiary',
    loadChildren: () => import('./add-beneficiary/add-beneficiary.module').then( m => m.AddBeneficiaryPageModule)
  },
  {
    path: 'imps',
    loadChildren: () => import('./imps/imps.module').then( m => m.ImpsPageModule)
  },
  {
    path: 'transfered-successfully',
    loadChildren: () => import('./transfered-successfully/transfered-successfully.module').then( m => m.TransferedSuccessfullyPageModule)
  },
  {
    path: 'loans',
    loadChildren: () => import('./loans/loans.module').then( m => m.LoansPageModule)
  },
  {
    path: 'loan-info',
    loadChildren: () => import('./loan-info/loan-info.module').then( m => m.LoanInfoPageModule)
  },
  {
    path: 'loan-statement',
    loadChildren: () => import('./loan-statement/loan-statement.module').then( m => m.LoanStatementPageModule)
  },
  {
    path: 'list-of-deposites',
    loadChildren: () => import('./list-of-deposites/list-of-deposites.module').then( m => m.ListOfDepositesPageModule)
  },
  {
    path: 'upload-deposite',
    loadChildren: () => import('./upload-deposite/upload-deposite.module').then( m => m.UploadDepositePageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'chosse-data',
    loadChildren: () => import('./chosse-data/chossedata.module').then( m => m.ChossedataPageModule)
  },
  {
    path: 'nearby-bank-atm',
    loadChildren: () => import('./nearby-bank-atm/nearby-bank-atm.module').then( m => m.NearbyBankAtmPageModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('./faqs/faqs.module').then( m => m.FaqsPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('./terms-conditions/terms-conditions.module').then( m => m.TermsConditionsPageModule)
  },
  {
    path: 'change-language',
    loadChildren: () => import('./change-language/change-language.module').then( m => m.ChangeLanguagePageModule)
  },
  {
    path: 'buyappalert',
    loadChildren: () => import('./buyappalert/buyappalert.module').then( m => m.BuyappalertPageModule)
  },
   
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
