import { Component, OnInit } from "@angular/core";
import { GossipService } from "src/app/store/gossip/gossip.service";

@Component({
  selector: "app-gossips",
  templateUrl: "./gossips.component.html",
  styleUrls: ["./gossips.component.css"]
})
export class GossipsComponent implements OnInit {
  constructor(private gossipService: GossipService) {}

  ngOnInit() {}
}
