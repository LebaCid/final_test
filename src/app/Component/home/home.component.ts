import { Component, HostListener } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currIndex: number = 0;

  currentIndex: number = 0;

  isMaximized: boolean | undefined;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMaximized = window.innerWidth >= 768;
  }

  nextParagraph() {
    if (this.currIndex < 2) {
      this.currIndex++;
    } else {
      this.currIndex = 0;
    }
  }

  previousParagraph() {
    if (this.currIndex > 0) {
      this.currIndex--;
    } else {
      this.currIndex = 2;
    }
  }

  nextPara() {
    if (this.currentIndex < 2) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  previousPara() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = 2;
    }
  }

  ngOnInit() {
    setInterval(() => {
      this.nextParagraph();
    }, 5000);
  }

  //SWIPER

  private swiper: Swiper | undefined;

  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper-container', this.getSwiperOptions());
  }

  private getSwiperOptions(): SwiperOptions {
    return {
      // Add your configuration options here
      slidesPerView: 4,
      spaceBetween: 0,
      loop: true,
      keyboard: true,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    };
  }
}



// slidesPerView: 3
// spaceBetween: 20
// initialSlide: 2
// loop: true
// autoplay: {
//   delay: 2000,
//   disableOnInteraction: false
// }
// pagination: {
//   el: '.swiper-pagination',
//   clickable: true
// }
// navigation: {
//   nextEl: '.swiper-button-next',
//   prevEl: '.swiper-button-prev'
// }
// keyboard: true
// mousewheel: true
// effect: 'fade'
// breakpoints: {
//   768: {
//     slidesPerView: 2,
//     spaceBetween: 10
//   },
//   1200: {
//     slidesPerView: 4,
//     spaceBetween: 20
//   }
// }
// on: {
//   slideChange: function () {
//     console.log('Slide changed');
//   },
//   reachEnd: function () {
//     console.log('Reached the end of slides');
//   }
// }
