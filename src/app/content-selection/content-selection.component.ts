import { Component, Input, OnInit } from '@angular/core';
import { swingAnimation } from "angular-animations";

@Component({
  selector: 'app-content-selection',
  templateUrl: './content-selection.component.html',
  styleUrls: ['./content-selection.component.css'],
  animations: [
    swingAnimation()
  ]
})
export class ContentSelectionComponent implements OnInit {

  @Input() imgSrc: string = '';
  @Input() imageText: string = '';
  isHovered: boolean = false;
  animState: boolean|null = null;

  constructor() { }

  ngOnInit(): void {
  }

  animDone() {
    if (!this.isHovered) {
      this.animState = null  
    } else {
      this.animState = !this.animState;
    }
  }

}
