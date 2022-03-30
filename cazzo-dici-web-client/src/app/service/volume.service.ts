import { Injectable } from '@angular/core';
import {Volume} from '../model/volume.interface';

@Injectable({
  providedIn: 'root'
})
export class VolumeService {
  dataMock: Volume[] = [
    {id: 0, year: 2022, start: new Date(2022, 0, 1), end: undefined},
    {id: 1, year: 2021, start: new Date(2021, 0, 1), end: new Date(2021, 11, 31)}
  ];

  constructor() { }

  getAll() {
    return this.dataMock;
  }

  endVolume(volumeId: number) {
    this.dataMock.find(data => data.id == volumeId).end = new Date();

    const today = new Date();

    let newVolume: Volume = {
      id: this.dataMock.length,
      end: undefined,
      start: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
      year: undefined
    }

    newVolume.year = newVolume.start.getFullYear();

    this.dataMock.push(newVolume);
  }
}
