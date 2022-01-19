import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit
{
  pdf: string = './assets/pdfs/Rachel_Odumu_2021_Resume.pdf';
  constructor() { }

  ngOnInit(): void
  {
  }

}
