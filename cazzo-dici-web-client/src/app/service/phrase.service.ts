import { Injectable } from '@angular/core';
import {Phrase} from '../model/phrase.interfafe';
import {UserService} from './user.service';
import {Comment} from '../model/comment.interface';
import {User} from '../model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class PhraseService {
  comment: Comment = {
    id: 0,
    date: new Date(),
    value: "Comment comment comment comment",
    username: "username"
  }
  dataMock: Phrase[] = [
    {id: 0, value: 'strafalcione 1', context: 'contesto 1', volumeId: 0, comments: [this.comment, this.comment], date: new Date(2022, 3, 12), createdBy: this.userService.getUserById(0), owner: this.userService.getUserById(1)},
    {id: 1, value: 'strafalcione 2', context: 'contesto 2', volumeId: 0, comments: [], date: new Date(2022, 3, 14), createdBy: this.userService.getUserById(0), owner: this.userService.getUserById(1)},
    {id: 2, value: 'strafalcione 3', context: 'contesto 3', volumeId: 0, comments: [], date: new Date(2022, 4, 2), createdBy: this.userService.getUserById(1), owner: this.userService.getUserById(0)}
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

  addComment(comment: Comment, phraseId: number) {
    comment.id = this.dataMock.find(data => data.id == phraseId).comments.length;
    this.dataMock.find(data => data.id == phraseId).comments.push(comment);
  }

  getLosers(volumeId: number) {
    let phrases = this.dataMock.filter(data => data.volumeId == volumeId);
    let users = this.userService.getUsers();
    let count: { user: User, count: number }[] = [];

    for (var user of users) {
      count.push({user: user, count: phrases.filter(data => data.owner.id == user.id).length});
    }

    let max = count[0].count;

    for (let c of count) {
      if (c.count > max) {
        max = c.count;
      }
    }

    return count.filter(data => data.count == max).map(data => data.user);
  }

}
