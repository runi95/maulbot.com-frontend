import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {Suggestion} from '../suggestion';

const posturl = '/postsuggestion';
const passreseturl = '/passreset';
const registerurl = '/register';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {

  suggestionList: Suggestion[];

  constructor() { }

  ngOnInit() {
  }

}
