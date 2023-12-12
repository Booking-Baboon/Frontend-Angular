import {AfterViewInit, Component, Input, ElementRef, ViewChild, OnInit} from '@angular/core';
import { animate, style, transition, trigger } from "@angular/animations";
import {delay} from "rxjs";

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css'],
  animations: [
    trigger('imageSlide', [
      transition(':increment', [
        style({ transform: 'translateX(100%)' }),
        animate('450ms ease-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)' }),
        animate('450ms ease-out', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class ImageCarouselComponent implements OnInit {
  @Input() images!: string[];

  currentImage!: string | undefined;
  currentIndex = 0;
  isLoading = false;

  ngOnInit() {
    this.loadImage(this.currentIndex);
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.loadImage(this.currentIndex);
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.loadImage(this.currentIndex);
  }

  private loadImage(index: number): void {
    this.currentImage = undefined;
    this.isLoading = true;

    const img = new Image();

    img.src = this.images[index];

    img.addEventListener('load', () => {
      this.currentImage = this.images[index];
      this.isLoading = false;
    });

    img.addEventListener('error', () => {
      console.error(`Failed to load image: ${this.images[index]}`);
      this.isLoading = false;
    });
  }
}
