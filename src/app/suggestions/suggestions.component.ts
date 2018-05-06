import { Component, OnInit } from '@angular/core';
import {Suggestion} from '../suggestions-service/suggestion';
import {SuggestionsService} from '../suggestions-service/suggestions.service';
import {ModalDismissReasons, NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {getOverloadKey} from 'tslint/lib/rules/adjacentOverloadSignaturesRule';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {

  selectedSuggestion: Suggestion;
  typeOptions: string[] = ['Bug Report', 'Improvement', 'Unit Text Data', 'Other (Unspecified)'];
  statusOptions: string[] = ['Unapproved', 'Approved', 'Finished', 'Rejected', 'Needs Discussion'];
  userSuggestions: Suggestion[];
  suggestions: Suggestion[];

  closeResult: string;

  constructor(private suggestionsService: SuggestionsService, private modalService: NgbModal) { }

  ngOnInit() {
    this.showSuggestion();
  }

  showSuggestion() {
    return this.suggestionsService.getUrl().subscribe((data: Suggestion[]) => this.suggestions = data);
  }

  getSuggestionColor(status: number): string {
    switch(status) {
      case 0: {
        return 'black';
      }
      case 1: {
        return 'GoldenRod';
      }
      case 2: {
        return 'green';
      }
      case 3: {
        return 'red';
      }
      case 4: {
        return 'teal';
      }
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

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  open(suggestion: Suggestion, content) {
    this.selectedSuggestion = suggestion;
    this.modalService.open(content, {size: 'vl', backdropClass: 'SuggestionModal'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

}
