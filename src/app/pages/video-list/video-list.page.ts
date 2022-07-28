import { Component, OnInit } from '@angular/core';

interface Video {
  title: string;
  description: string;
  url: string;
  thumbnail: string;}

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.page.html',
  styleUrls: ['./video-list.page.scss'],
})
export class VideoListPage implements OnInit {

  public list: Video[];
  constructor() {
    this.list = [
      {
        title: 'Video 1',
        description: 'SMART VIDEO 1',
        url: 'https://www.youtube.com/watch?v=6DrNC-xQcGs&list=RD6DrNC-xQcGs&start_radio=1',
        thumbnail: 'assets/images/vidThumbnail.png',
      },
      {
        title: 'Video 2',
        description: 'SMART VIDEO 2',
        url: 'https://www.youtube.com/watch?v=6DrNC-xQcGs&list=RD6DrNC-xQcGs&start_radio=1',
        thumbnail: 'assets/images/vidThumbnail.png',
      },
      {
        title: 'Video 3',
        description: 'SMART VIDEO 3',
        url: 'https://www.youtube.com/watch?v=6DrNC-xQcGs&list=RD6DrNC-xQcGs&start_radio=1',
        thumbnail: 'assets/images/vidThumbnail.png',
      },
    ];
   }

  ngOnInit() {
  }

}
