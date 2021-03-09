import { Component, VERSION } from "@angular/core";
import { Subscription } from "rxjs";
import { MessageService } from "./message.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  constructor(public msgService: MessageService) {}
  subscription: Subscription;
  msg: string;
  ngOnInit() {
    this.subscription = this.msgService.message.subscribe(msg => {
      this.msg = msg;
    });
  }
}
