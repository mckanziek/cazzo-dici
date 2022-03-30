import { Component, OnInit } from '@angular/core';
import {VolumeService} from '../../service/volume.service';
import {PhraseService} from '../../service/phrase.service';
import {Volume} from '../../model/volume.interface';
import {Phrase} from '../../model/phrase.interfafe';
import {User} from '../../model/user.interface';
import {UserService} from '../../service/user.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: User[];
  volumes: Volume[];
  phrases: Phrase[];
  selectedVolume: Volume;

  constructor(private volumeService: VolumeService,
              private phraseService: PhraseService,
              private userService: UserService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.init();
  }

  init() {
    this.volumes = this.volumeService.getAll();
    this.selectedVolume = this.selectedVolume ? this.selectedVolume : this.volumes[0];
    this.phrases = this.phraseService.getByVolume(this.selectedVolume.id);
  }

  isActive() {
    return this.selectedVolume.end == undefined;
  }

  openEndVolume(content) {
    this.modalService.open(content, {windowClass: 'dark-modal'});
  }

  getLosers() {
    return this.phraseService.getLosers(this.selectedVolume.id);
  }

  endVolume() {
    this.modalService.dismissAll();
    this.volumeService.endVolume(this.selectedVolume.id);
    this.init();
    console.log(this.volumeService.dataMock);
  }



}
