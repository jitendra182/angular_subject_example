import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class MessageService {
  constructor() {}
  public message = new Subject<string>();

  public msg = new EventEmitter<String>();
  setMessage(value: string) {
    this.message.next(value); //it is publishing this value to all the subscribers that have already subscribed to this message
  }

  setMsg(value: string) {
    this.msg.emit(value);
  }
}
