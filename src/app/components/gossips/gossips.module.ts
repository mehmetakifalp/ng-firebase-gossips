import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GossipsComponent } from "./components/gossips/gossips.component";
import { GossipListComponent } from "./components/gossip-list/gossip-list.component";
@NgModule({
  declarations: [GossipsComponent, GossipListComponent],
  imports: [CommonModule]
})
export class GossipsModule {}
