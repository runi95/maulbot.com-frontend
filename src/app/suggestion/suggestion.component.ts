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
  userSuggestions: Suggestion[] = [{id: 1, status: 2, title: 'BestTitle', type: 2, description: 'bestDescription'}];
  suggestions: Suggestion[];

  constructor(private suggestionsService: SuggestionsService) { }

  ngOnInit() {
    this.showSuggestion();
  }

  showSuggestion() {
    this.suggestionsService.getUrl().subscribe((data: Suggestion[]) => this.suggestions = data);
  }

  getSuggestionColor(): string {
    return 'red';
  }

  onSubmit(): void {

  }

}
