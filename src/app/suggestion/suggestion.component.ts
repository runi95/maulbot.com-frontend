import { Component, OnInit } from '@angular/core';
import {Suggestion} from '../suggestion';
import {SuggestionsService} from '../suggestions-service/suggestions.service';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {

  typeOptions: string[] = ['Bug Report', 'Improvement', 'Unit Text Data', 'Other (Unspecified)']
  userSuggestions: Suggestion[];
  suggestions: Suggestion[];

  constructor(private suggestionsService: SuggestionsService) { }

  ngOnInit() {
    this.showSuggestion();
  }

  showSuggestion() {
    return this.suggestionsService.getUrl().subscribe((data: Suggestion[]) => this.suggestions = data);
  }

  getSuggestionColor(status: number): string {
    if(status === 1) {
      return 'GoldenRod';
    } else if(status === 2) {
      return 'green';
    } else {
      return 'GoldenRod';
    }
  }

  getSuggestionClass(type: string): string {
    if (type === 'TEXT') {
      return 'fas fa-align-justify';
    } else if (type === 'BUG') {
      return 'fas fa-bug';
    } else if (type === 'IM') {
      return 'far fa-code-branch';
    } else if (type === 'OTR') {
      return 'fas fa-info';
    } else {
      return 'fas fa-question';
    }
  }

  onSubmit(): void {

  }

}
