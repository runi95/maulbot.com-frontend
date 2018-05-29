import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDismissReasons, NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from '../auth/auth.service';
import {Suggestion, SuggestionDetail} from '../django-client/Classes';
import {DjangoClientService} from '../django-client/django-client.service';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {

  selectedSuggestion: any;
  typeOptions: string[] = ['Bug Report', 'Improvement', 'Unit Text Data', 'Other (Unspecified)'];
  statusOptions: string[] = ['Unapproved', 'Approved', 'Finished', 'Rejected', 'Needs Discussion'];
  userSuggestions: Suggestion[];
  suggestions: Suggestion[];
  @ViewChild('theForm') theForm;

  closeResult: string;
  commentUpdating = false;

  constructor(private modalService: NgbModal,
              public _authService: AuthService,
              private djangoClientService: DjangoClientService) {
  }

  ngOnInit() {
    this.showSuggestion();
    if (this._authService.loggedIn()) {
      this.getMySuggestions();
    }
  }

  showSuggestion() {
    return this.djangoClientService.listSuggestions().subscribe((data: Suggestion[]) => this.suggestions = data);
  }

  getMySuggestions() {
    return this.djangoClientService.getMySuggestions().subscribe((data: Suggestion[]) => this.userSuggestions = data);
  }

  updateMySuggestions(event: boolean) {
    this.getMySuggestions();
  }

  updateSelectedSuggestion(event: number) {
    this.commentUpdating = true;
    this.djangoClientService.getSuggestionDetail(event).subscribe((data: SuggestionDetail) => {
      this.selectedSuggestion = data;
      this.commentUpdating = false;
    });
  }

  getSuggestionColor(status: number): string {
    switch (status) {
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
      return `with: ${reason}`;
    }
  }

  open(suggestion: Suggestion, content) {
    this.selectedSuggestion = Suggestion;
    this.modalService.open(content, {size: 'vl', backdropClass: 'SuggestionModal'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.djangoClientService.getSuggestionDetail(suggestion.pk).subscribe((data: SuggestionDetail) => {
      this.selectedSuggestion = data;
    });
  }

}
