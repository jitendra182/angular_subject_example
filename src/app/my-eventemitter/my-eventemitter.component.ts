import { Component, OnInit } from "@angular/core";
import { MessageService } from "../message.service";

@Component({
  selector: "app-my-eventemitter",
  templateUrl: "./my-eventemitter.component.html",
  styleUrls: ["./my-eventemitter.component.css"]
})
export class MyEventemitterComponent implements OnInit {
  constructor(public messageService: MessageService) {}
  string;
  ngOnInit() {}
  setMsg(data: string) {
    this.messageService.setMsg(data);
  }
}
