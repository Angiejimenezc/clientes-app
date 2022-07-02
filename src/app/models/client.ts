export class Client {
  private _clientList: Client[] = [];

  constructor(
    private _id: number,
    private _name: string,
    private _surname: string,
    private _createAt: string,
    private _email: string
  ) {}

  public get id(): number {
    return this._id;
  }
  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }
  public get surname(): string {
    return this._surname;
  }

  public set surname(surname: string) {
    this._surname = surname;
  }

  public get createAt(): string {
    return this._createAt;
  }

  public set createAt(createAt: string) {
    this._createAt = createAt;
  }
  public get email(): string {
    return this._email;
  }

  public set email(email: string) {
    this._email = email;
  }

  public get clientList(): Client[] {
    return this._clientList;
  }
}
