import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/user.interface';
import {PhraseService} from '../../service/phrase.service';

@Component({
  selector: 'app-graduatory',
  templateUrl: './graduatory.component.html',
  styleUrls: ['./graduatory.component.scss']
})
export class GraduatoryComponent implements OnInit {

  @Input()
  users: User[];

  @Input()
  totalPhrases: number;

  @Input()
  volumeId: number;

  constructor(private phraseService: PhraseService) { }

  ngOnInit(): void {}

  getTotalPhrasesForUser(userId: number) {
    let total = this.phraseService.getTotalPhrasesForUser(userId, this.volumeId);
    return (100 / this.totalPhrases) * total;
  }

}
