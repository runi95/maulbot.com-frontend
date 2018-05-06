export class Suggestion {
  constructor(
    public title: string,
    public text: string,
    public type: string,
    public unixTime: string,
    public status: number,
    public submittedby: string,
    public approvedby: string,
  ) { }
}
