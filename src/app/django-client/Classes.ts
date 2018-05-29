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
  copied = false;
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

export class PlayerStats {
  name: string;
  total_lvl: number;
  total_exp: number;
  player: PlayerTrack[];
}

export class PlayerTrack {
  name: string;
  realm: string;
  num_games: number;
  linkedPlayer: LinkedPlayer[];
}

export class LinkedPlayer {
  name: string;
  username: string;
  userid: number;
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
  ) {
  }
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
  ) {
  }
}

export class SuggestionForm {
  constructor(
    public title: string,
    public text: string,
    public type: string,
  ) {
  }
}

export class NewComment {
  text: string;
}


export class SignUpError {
  email: any[];
  username: any[];
  password: any[];

}

export class LoginError {
  email: any[];
  username: any[];
  password: any[];
  non_field_errors: any[];

}
