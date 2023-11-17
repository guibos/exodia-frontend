import {Component, Input, OnInit} from '@angular/core';
import {NgswService} from "../../../image/services/ngsw/ngsw.service";
import {ImageInformation} from "../../../image/classes/image-information/image-information";

@Component({
  selector: 'app-shirokuro-carrousel',
  templateUrl: './shirokuro-carrousel.component.html',
  styleUrls: ['./shirokuro-carrousel.component.css']
})
export class ShirokuroCarrouselComponent implements OnInit {
  @Input() imagesPath!: string;
  images: ImageInformation[] = [];
  pauseOnHover = false;
  pauseOnFocus = false;
  interval = 3000;

  constructor(private _ngsw: NgswService) {
  }

  ngOnInit(): void {
    this._ngsw.getImagesAssetsUrlsListPath(this.imagesPath).subscribe(
      res => {
        this.images = res.sort((imageA, imageB) => {
          if (imageA.fileName < imageB.fileName) {
            return 1;
          }
          if (imageA.fileName > imageB.fileName) {
            return -1;
          }
          return 0;
        })
      }
    )
  }

}
