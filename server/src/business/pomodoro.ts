export class Pomodoro {
  private id: string;
  private date: Date;

  public get getId(): string {
    return this.id;
  }

  public get getDate(): Date {
    return this.date;
  }

  // builder for fields
  public setId(id: string): Pomodoro {
    this.id = id;
    return this;
  }

  public setDate(date: Date): Pomodoro {
    this.date = date;
    return this;
  }
}
