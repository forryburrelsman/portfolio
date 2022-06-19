import { Component, OnInit } from '@angular/core';
let scripts: any;

@Component({
  selector: 'app-hidden-gems',
  templateUrl: './hidden-gems.component.html',
  styleUrls: [

    './hidden-gems.component.css'
  ]
})

export class HiddenGemsComponent implements OnInit{


  ngOnInit(): void {
    new scripts();
  }
}

