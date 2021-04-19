import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit
{
  pdf: string = './assets/pdfs/rachel_odumu_2021_resume.pdf';
  constructor() { }

  ngOnInit(): void
  {
  }

}
