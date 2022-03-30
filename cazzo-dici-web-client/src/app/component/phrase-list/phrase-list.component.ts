import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Phrase} from '../../model/phrase.interfafe';
import {User} from '../../model/user.interface';
import {PhraseService} from '../../service/phrase.service';
import {Volume} from '../../model/volume.interface';
import {Comment} from '../../model/comment.interface';

@Component({
  selector: 'app-phrase-list',
  templateUrl: './phrase-list.component.html',
  styleUrls: ['./phrase-list.component.scss']
})
export class PhraseListComponent implements OnInit {

  @Input()
  phrases: Phrase[];

  @Input()
  users: User[];

  @Input()
  volume: Volume;

  @Output()
  onAddPhrase: EventEmitter<any> = new EventEmitter<any>();

  newPhrase: Phrase;
  expanded: number;
  newComment: Comment;

  constructor(private modalService: NgbModal, private phraseService: PhraseService) { }

  ngOnInit(): void {
    this.reset();
  }

  openAddModal(content) {
    // TODO dark modal
    this.modalService.open(content, {windowClass: 'dark-modal'});
  }

  save() {
    this.newPhrase.volumeId = this.volume.id;
    this.newPhrase.date = new Date();
    this.newPhrase.comments = [];
    this.newPhrase.createdBy = null;
    this.phraseService.add(this.newPhrase);
    this.modalService.dismissAll();
    this.reset();
    this.onAddPhrase.emit();
  }

  reset() {
    this.newPhrase = {
      id: undefined,
      createdBy: undefined,
      comments: [],
      date: undefined,
      volumeId: undefined,
      owner: undefined,
      context: undefined,
      value: undefined
    };

    this.newComment = {
      id: undefined,
      value: undefined,
      date: undefined,
      username: undefined
    };
  }

  isActive() {
    return this.volume.end == undefined;
  }

  expand(phraseId: number) {
    if (this.expanded == phraseId) {
      this.expanded = undefined;
    } else {
      this.expanded = phraseId;
    }

    this.reset();
  }

  addComment(phraseId) {
    this.newComment.date = new Date();
    this.phraseService.addComment(this.newComment, phraseId);
    this.onAddPhrase.emit();
    this.reset();
  }
}
