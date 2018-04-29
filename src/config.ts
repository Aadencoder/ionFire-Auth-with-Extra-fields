import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
}

export const firebaseConfig = {
	fire: {
		apiKey: "AIzaSyBhpCJTa7Liy_AU9Z9EmAY4PL2r2y8zlmA",
		authDomain: "authuserextra.firebaseapp.com",
		databaseURL: "https://authuserextra.firebaseio.com",
		projectId: "authuserextra",
		storageBucket: "authuserextra.appspot.com",
		messagingSenderId: "713191646978"
	}
};
