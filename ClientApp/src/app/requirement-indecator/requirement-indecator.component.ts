import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-requirement-indecator',
  templateUrl: './requirement-indecator.component.html',
  styleUrls: ['./requirement-indecator.component.css']
})
export class RequirementIndecatorComponent implements OnInit {
  @Input() req: number[]
  constructor() { }

  ngOnInit() {
  }

}
