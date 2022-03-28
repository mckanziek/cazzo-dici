import { Component, OnInit } from '@angular/core';
import {VolumeService} from '../../service/volume.service';
import {PhraseService} from '../../service/phrase.service';
import {Volume} from '../../model/volume.interface';
import {Phrase} from '../../model/phrase.interfafe';
import {User} from '../../model/user.interface';
import {UserService} from '../../service/user.service';

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
              private userService: UserService) { }

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
    const now = new Date();
    return this.selectedVolume.start < now && this.selectedVolume.end > now;
  }

}
