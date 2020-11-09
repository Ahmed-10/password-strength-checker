import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-password-indecator',
  templateUrl: './password-indecator.component.html',
  styleUrls: ['./password-indecator.component.css']
})
export class PasswordIndecatorComponent implements OnInit {
  @Input() score: number
  constructor() { }

  ngOnInit() {
  }

}
