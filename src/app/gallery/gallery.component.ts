import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"],
})
export class GalleryComponent implements OnInit {
  images: Array<any>;
  constructor() {
    this.images = [];
  }
  ngOnInit() {
    for (let i = 1; i < 9; i++) {
      let imgObj = {
        name: `Random ${i}`,
        url: `https://picsum.photos/300/300?random=${i}`,
      };
      this.images.push(imgObj);
    }
  }
}
