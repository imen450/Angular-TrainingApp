import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
  //name = 'Formation web';
  @Input() session : any;
  @Output() participantsChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  inscrire(){
    console.log('Nouvelle Inscription...');
    this.session.name = 'Formation Angular';
    this.session.participants = +this.session.participants +1;
    console.log(this.session.participants + 'participants');
    this.participantsChange.emit({
      value: this.session.participants
    });
    if (this.session.participants >= 20){this.session.isCompleted = true;}
  }

}
