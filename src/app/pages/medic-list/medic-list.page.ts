import { Component, OnInit } from '@angular/core';

interface MedicineList {
  title: string;
  description: string;
  thumbnail: string;
}

@Component({
  selector: 'app-medic-list',
  templateUrl: './medic-list.page.html',
  styleUrls: ['./medic-list.page.scss'],
})
export class MedicListPage implements OnInit {
  public list: MedicineList[];
  constructor() {
    this.list = [
      {
        title: 'NRTI',
        description: 'Nucleotide Reverse Transcriptase Inhibitors',
        thumbnail: 'assets/images/medThumbnail.png',
      },
      {
        title: 'PI',
        description: 'Protease Inhibitors',
        thumbnail: 'assets/images/medThumbnail.png',
      },
      {
        title: 'NNRTI',
        description: 'Non-Nucleotide Reverse Transcriptase Inhibitors',
        thumbnail: 'assets/images/medThumbnail.png',
      },
      {
        title: 'II',
        description: 'Integrase Inhibitors',
        thumbnail: 'assets/images/medThumbnail.png',
      },
    ];
  }

  ngOnInit() {}
}
