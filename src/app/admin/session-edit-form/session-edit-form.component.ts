import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Session } from 'src/app/session';
import { FakeSessionItemService } from '../fake-session-item.service';
import {ActivatedRoute} from '@angular/router';
import { Observable} from 'rxjs';
@Component({
  selector: 'app-session-edit-form',
  templateUrl: './session-edit-form.component.html',
  styleUrls: ['./session-edit-form.component.css']
})
export class SessionEditFormComponent implements OnInit {
  id: any;
  tracks = ['MEAN', 'Angular','NodeJS', 'Android', 'Swift', 'Xamarin'];
  session: any;
  sub: any;
  constructor(private route: ActivatedRoute, 
    private sessionItemService: FakeSessionItemService
     ) { }
     ngOnInit() {
     this.sub = this.route.params.subscribe(params => {
     this.id = params['id']; 
     });
     console.log('Session ID ' + this.id.toString());
     this.session = this.sessionItemService.getSession(this.id);
     }
     editSession(sessionItem: any) {
     console.log(sessionItem);
     }}    



  