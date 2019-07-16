import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  onLogin() {
    this.isLoading = true;
    this.authService.login();
    this.loadingCtrl
      .create({
        keyboardClose: true,
        message: 'Logging in, please wait...',
      })
      .then(loadingEl => {
        loadingEl.present(); // -> Here we show the loading element
        setTimeout(() => {
          this.isLoading = false;
          loadingEl.dismiss(); // -> After loading we dismiss the loading element
          this.router.navigateByUrl('/places/tabs/discover');
        }, 1000);
      });
  }
}
