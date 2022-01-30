import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {User} from '../../model/user.interface';

@Component({
  selector: 'app-graduatory',
  templateUrl: './graduatory.component.html',
  styleUrls: ['./graduatory.component.scss']
})
export class GraduatoryComponent implements OnInit, OnChanges {

  @Input() users: User[];

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.users);
    if (this.users != undefined) {
      for (let i = 0; i < this.users.length; i++) {
        console.log(this.users);
      }
    }

  }

}
