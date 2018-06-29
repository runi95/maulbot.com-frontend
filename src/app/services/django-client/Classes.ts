export class GameChart {
  days: any;
  counts: any;
}

export class GameTable {
  id: number;
  botid: number;
  gamename: string;
  ownername: string;
  creatorname: string;
  map: string;
  slotstaken: number;
  totalgames: number;
  slotstotal: number;
  totalplayers: number;
  eventtime: string;
  age: string;
  players: GameTablePlayer[];
}
export class GameTablePlayer {
  username: number;
  realm: string;
  ping: string;
}

export class Comment {
  author: string;
  avatar: string;
  created_date: string;
  text: string;
  replys: CommentReply[];
  superuser: boolean;
}

export class CommentReply {
  author: string;
  avatar: string;
  created_date: string;
  text: string;
  superuser: boolean;
}


export class BlogDetail {
  pk: number;
  title: string;
  username: string;
  published_date: string;
  avatar: string;

  text: string;
  mapfile: string;
  filename: string;
  comments: Comment[];
}

export class NotificationMenu {
  new: number;
  notifications: Notifications[];
}

export class Notifications {
  pk: number;
  active: boolean;
  created_date: string;
  link: string;
  title: string;
  text: string;
}

export class LoadingScreen {
  date: string;
  directory: string;
  original: string;
  converted: boolean;
  zip_file: string;
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

export class LevelAvatar {
  name: string;
  tooltip: string;
  link: string;
  level: number;
  pk: number;
}

export class AdminStatusBar {
  approved: number;
  unapproved: number;
  bans: number;
}
export class UpdateSuggestion {
  constructor(
    public status: number,
    public pk: number,
  ) {
  }
}
export class AdminSuggestion {
  bugReports: Suggestion[];
  improvements: Suggestion[];
  unitText: Suggestion[];
  other: Suggestion[];
}
export class LinkedPlayer {
  constructor(
    public name: string,
    public username: string,
    public userid: number,
    public server: string,
    public status: string,
    public pk: number,
    public token: string,
    public total_lvl: number,
    public total_exp: number,
  ) {
  }
}

export class LinkedPlayerForm {
  constructor(
    public name: string,
    public server: string,
  ) {
  }
}


export class Product {
  constructor(
    public pk: number,
    public title: string,
    public description: string,
    public price: string,
    public active: boolean,
    public tier: number,
  ) {
  }
}

export class LinkedPlayerToken {
  constructor(
    public token: string,
  ) {
  }
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


export class AccountInfo {
  constructor(
    public pk: number,
    public username: string,
    public email: string,
    public avatar: string,
  ) {
  }
}
