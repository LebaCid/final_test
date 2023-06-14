import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  currentIndex: number = 0;

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
}
