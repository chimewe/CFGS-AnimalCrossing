import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.css']
})
export class RopaComponent {
  clickedImageSrc: string;
  isClicked: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  getImageSrc(event: MouseEvent) {
    const clickedElement = event.target as HTMLImageElement;
    this.clickedImageSrc = clickedElement.src;
    var prev:any = document.getElementById("preview");
    prev.src = this.clickedImageSrc;

    var imageSlide = document.getElementsByClassName("img-slide");
    for(let i=0; i<imageSlide.length; i++){
      imageSlide[i].classList.remove("active");
    }

    const nativeElement = this.el.nativeElement;
    this.renderer.addClass(nativeElement, 'active');
  }
}
