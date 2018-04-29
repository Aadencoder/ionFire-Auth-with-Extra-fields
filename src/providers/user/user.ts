import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
  }



  deleteUser(id): Promise<any> {
    return new Promise((resolve) => {
      let ref = firebase.database().ref('users').child(id);
      ref.remove();
      resolve(true);
    });
  }



  addToDatabase(userObj): Promise<any> {
    return new Promise((resolve) => {
      let addRef = firebase.database().ref('users');
      addRef.push(userObj);
      resolve(true);
    });
  }



  updateDatabase(id, userObj): Promise<any> {
    return new Promise((resolve) => {
      var updateRef = firebase.database().ref('users').child(id);
      updateRef.update(userObj);
      resolve(true);
    });
  }























  renderMovies(): Observable<any> {

    return new Observable(observer => {
      let films: any = [];
      firebase.database().ref('films').orderByKey().once('value', (items: any) => {
        items.forEach((item) => {
          films.push({
            id: item.key,
            actors: item.val().actors,
            date: item.val().date,
            duration: item.val().duration,
            genres: item.val().genres,
            image: item.val().image,
            rating: item.val().rating,
            summary: item.val().summary,
            title: item.val().title
          });
        });

        observer.next(films);
        observer.complete();
      },
        (error) => {
          console.log("Observer error: ", error);
          console.dir(error);
          observer.error(error)
        });

    });
  }







  uploadImage(imageString): Promise<any> {
    let image: string = 'movie-' + new Date().getTime() + '.jpg',
      storageRef: any,
      parseUpload: any;

    return new Promise((resolve, reject) => {
      storageRef = firebase.storage().ref('posters/' + image);
      parseUpload = storageRef.putString(imageString, 'data_url');

      parseUpload.on('state_changed', (_snapshot) => {
        // We could log the progress here IF necessary
        // console.log('snapshot progess ' + _snapshot);
      },
        (_err) => {
          reject(_err);
        },
        (success) => {
          resolve(parseUpload.snapshot);
        });
    });
  }


}
