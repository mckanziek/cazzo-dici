import { Injectable } from '@angular/core';
import {Phrase} from '../model/phrase.interfafe';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PhraseService {
  dataMock: Phrase[] = [
    {id: 0, value: 'strafalcione 1', context: 'contesto 1', volumeId: 0, comments: [], date: new Date(), createdBy: this.userService.getUserById(0), owner: this.userService.getUserById(1)},
    {id: 1, value: 'strafalcione 2', context: 'contesto 2', volumeId: 0, comments: [], date: new Date(), createdBy: this.userService.getUserById(0), owner: this.userService.getUserById(1)},
    {id: 2, value: 'strafalcione 3', context: 'contesto 3', volumeId: 0, comments: [], date: new Date(), createdBy: this.userService.getUserById(1), owner: this.userService.getUserById(0)}
  ];

  constructor(private userService: UserService) {}

  getByVolume(volumeId: number) {
    return this.dataMock.filter(phrase => phrase.volumeId === volumeId);
  }

  getTotalPhrasesForUser(userId: number, volumeId: number) {
    return this.dataMock.filter(p => p.volumeId === volumeId && p.owner.id === userId).length;
  }

  add(phrase: Phrase) {
    phrase.id = this.dataMock.length;
    this.dataMock.push(phrase);
  }
}
