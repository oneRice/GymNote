import { Component, OnInit } from '@angular/core';

@Component({
    selector: "app-ab-info",
    templateUrl: "pages/ab-info/ab-info.html",
    styleUrls: ["pages/ab-info/ab-info-common.css", "pages/ab-info/ab-info.css"],
})

export class AbInfo implements OnInit {
  name = "user";
  constructor() { }

  ngOnInit() {
      
  }

}