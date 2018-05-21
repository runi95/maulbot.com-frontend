export class GameChart {
  days: any;
  counts: any;
}

export class GameTable {
  players: number;
  botname: string;
  gamename: string;
  getReadableTime: number;
  status: string;
  getActive: boolean;
}

export class Comment {
  author: string;
  created_date: string;
  text: string;
  replys: CommentReply[];
  superuser: boolean;
}

export class CommentReply {
  author: string;
  created_date: string;
  text: string;
  superuser: boolean;
}


export class BlogDetail {
  pk: number;
  title: string;
  username: string;
  published_date: string;
  text: string;
  mapfile: string;
  filename: string;
  comments: Comment[];
}

export class Suggestion {
  constructor(
    public pk: number,
    public title: string,
    public type: string,
    public pub_date: string,
    public status: number,
    public submittedby: string,
    public approvedby: string,
  ) { }
}

export class SuggestionDetail {
  constructor(
    public pk: number,
    public title: string,
    public text: string,
    public type: string,
    public pub_date: string,
    public status: number,
    public submittedby: string,
    public approvedby: string,
    public comments: Comment[],
  ) { }
}

export class SuggestionForm {
  constructor(
    public title: string,
    public text: string,
    public type: string,
  ) { }
}

export class NewComment {
  text: string;
}


export class SignUpError {
  email: Array;
  username: Array;
  password: Array;

}
export class LoginError {
  email: Array;
  username: Array;
  password: Array;
  non_field_errors: Array;

}
