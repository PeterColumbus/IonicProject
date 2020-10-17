import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.page.html",
  styleUrls: ["./about-me.page.scss"],
})
export class AboutMePage implements OnInit {
  myImage: String = 'https://i.kym-cdn.com/photos/images/newsfeed/001/915/414/dc3.jpg';
  constructor() {}

  ngOnInit() {}
}
