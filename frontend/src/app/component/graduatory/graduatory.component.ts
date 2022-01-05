import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/user.interface';

@Component({
  selector: 'app-graduatory',
  templateUrl: './graduatory.component.html',
  styleUrls: ['./graduatory.component.scss']
})
export class GraduatoryComponent implements OnInit {

  @Input() users:   User[];

  constructor() { }

  ngOnInit(): void {
  }

}
