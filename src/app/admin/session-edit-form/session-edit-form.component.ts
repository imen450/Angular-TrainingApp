import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Session } from 'src/app/session';

@Component({
  selector: 'app-session-edit-form',
  templateUrl: './session-edit-form.component.html',
  styleUrls: ['./session-edit-form.component.css']
})
export class SessionEditFormComponent implements OnInit {
  tracks = ['MEAN', 'Angular','NodeJS', 'Android', 'Swift', 'Xamarin'];
  session = new Session(1, 'Web', this.tracks[0], new
  Date('2021-12-09'), 10, 'Tunis', 0, false);

  ngOnInit(): void {
  }
  editSession(sessionItem: NgForm) : void 
  {
   console.log("Session updates..."+ JSON.stringify(sessionItem.value));
  }
}
