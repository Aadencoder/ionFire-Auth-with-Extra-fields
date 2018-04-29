import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
}

export const firebaseConfig = {
	fire: {
		apiKey: "",
		authDomain: "",
		databaseURL: "",
		projectId: "",
		storageBucket: "",
		messagingSenderId: ""
	}
};
