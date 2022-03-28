import { Injectable } from '@angular/core';
import {Volume} from '../model/volume.interface';

@Injectable({
  providedIn: 'root'
})
export class VolumeService {
  dataMock: Volume[] = [
    {id: 0, year: 2022, start: new Date(2022, 0, 1), end: new Date(2022, 11, 31)},
    {id: 1, year: 2021, start: new Date(2021, 0, 1), end: new Date(2021, 11, 31)}
  ];

  constructor() { }

  getAll() {
    return this.dataMock;
  }
}
