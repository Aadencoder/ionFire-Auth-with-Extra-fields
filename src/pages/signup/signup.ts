import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home.page';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'as-page-signup',
	templateUrl: './signup.html'
})
export class SignupPage {
	signupError: string;
	form: FormGroup;

	constructor(
		fb: FormBuilder,
		private navCtrl: NavController,
		public _DB: UserProvider,
		private auth: AuthService
	) {
		this.form = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
  }

  signup() {
		let data = this.form.value;
		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signUp(credentials).then(
		// 	() => this.navCtrl.setRoot(HomePage),
		// 	error => this.signupError = error.message
		// );
			(auth) => {
				this._DB.addToDatabase({
					role: 'member',
					id: auth.uid
					})
					.then(res => console.log("profile updated"))
					.catch(err => console.log(err));
			}).catch(
				(err) => {
					console.log(err);
				});
  }
}
