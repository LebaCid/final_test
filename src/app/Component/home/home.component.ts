import { AfterViewInit, Component, HostListener, OnDestroy, Renderer2 } from '@angular/core';
import Swiper, { Autoplay } from 'swiper';

Swiper.use([Autoplay]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  constructor(private renderer: Renderer2) { }

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

  @HostListener('window:resize', [])
  onWindowResize() {
    this.setResponsiveImageClass();
  }

  setResponsiveImageClass() {
    const windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      this.renderer.addClass(document.querySelector('.responsive-image'), 'small-screen-image');
      this.renderer.removeClass(document.querySelector('.responsive-image'), 'large-screen-image');
    } else {
      this.renderer.addClass(document.querySelector('.responsive-image'), 'large-screen-image');
      this.renderer.removeClass(document.querySelector('.responsive-image'), 'small-screen-image');
    }
  }

  isSmallScreen(): boolean {
    return window.innerWidth < 768; // Adjust the breakpoint according to your needs
  }

  isLargeScreen(): boolean {
    return window.innerWidth >= 1024; // Adjust the breakpoint according to your needs
  }

  //SWIPER

  private swiperInstance: Swiper | null = null;

  ngAfterViewInit() {
    this.swiperInstance = new Swiper('.swiper-container', {
      slidesPerView: 4,
      direction: 'horizontal',
      loop: true,
      autoplay: {
        delay: 5000, // Time between slides (5 seconds)
      },
    });
  }

  ngOnDestroy() {
    if (this.swiperInstance) {
      this.swiperInstance.destroy();
    }
  }

  //IMAGE SLIDER
  images = [
    { src: 'https://www.ignitesocialmedia.com/wp-content/uploads/2021/10/home-gallery.jpg', alt: 'Image 1' },
    { src: 'https://www.ignitesocialmedia.com/wp-content/uploads/2021/10/home-gallery1.jpg', alt: 'Image 2' },
    { src: 'https://www.ignitesocialmedia.com/wp-content/uploads/2021/10/home-gallery2.jpg', alt: 'Image 3' },
    { src: 'https://www.ignitesocialmedia.com/wp-content/uploads/2021/10/82448667_1766205996848026_8278347793575965953_n.jpg', alt: 'Image 4' },
    { src: 'https://www.ignitesocialmedia.com/wp-content/uploads/2021/10/95316265_532571454319089_2244526092926431294_n.jpg', alt: 'Image 5' }
  ];

  selectedImage: any;

  openImage(image: any) {
    this.selectedImage = image;
  }

  showPreviousImage() {
    const currentIndex = this.images.indexOf(this.selectedImage);
    const previousIndex = (currentIndex - 1 + this.images.length) % this.images.length;
    this.selectedImage = this.images[previousIndex];
  }

  showNextImage() {
    const currentIndex = this.images.indexOf(this.selectedImage);
    const nextIndex = (currentIndex + 1) % this.images.length;
    this.selectedImage = this.images[nextIndex];
  }

  closeModal() {
    this.selectedImage = null;
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
