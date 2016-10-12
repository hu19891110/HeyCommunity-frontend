import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Helper } from '../../other/helper';

import { UserService } from '../../services/user.service';
import { AuthenticateService } from '../../services/authenticate.service';

import { MeProfileUpdatePage} from '../../pages/me/me-profileUpdate';
import { MeAvatarPage} from '../../pages/me/me-avatar';

@Component({
  selector: 'page-me-profile',
  templateUrl: 'me-profile.html'
})
export class MeProfilePage {
  MeProfileUpdatePage = MeProfileUpdatePage;
  MeAvatarPage = MeAvatarPage;


  //
  // constructor
  constructor(
    public helper: Helper,
    public userService: UserService,
    public authService: AuthenticateService,
    public navCtrl: NavController
  ) {
  }


}
