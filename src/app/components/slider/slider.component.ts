import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageObject = [{
    image: 'https://images.alphacoders.com/111/thumbbig-1115509.webp',
    thumbImage: 'https://images.alphacoders.com/111/thumbbig-1115509.webp',

  }, {
    image: 'https://www.wallpapertip.com/wmimgs/42-426811_thing-movie-poster.jpg',
    thumbImage: 'https://www.wallpapertip.com/wmimgs/42-426811_thing-movie-poster.jpg'
  }, {
    image: 'https://cdn.mos.cms.futurecdn.net/9EwSedAyyfefRgjgfPFcwN.jpg',
    thumbImage: 'https://cdn.mos.cms.futurecdn.net/9EwSedAyyfefRgjgfPFcwN.jpg',
  }];

}
