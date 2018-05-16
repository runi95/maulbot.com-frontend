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
