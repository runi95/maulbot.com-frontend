import { Component, OnInit } from '@angular/core';
import {Suggestion} from '../suggestion';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {

  suggestionList: Suggestion[] = [{id: 1, status: 2, title: 'BestTitle', type: 'bestType', description: 'bestDescription'}];
  posturl = '/postsuggestion';
  passreseturl = '/passreset';
  registerurl = '/register';

  constructor() { }

  ngOnInit() {
  }

  getSuggestionColor(): void {
  }

}
