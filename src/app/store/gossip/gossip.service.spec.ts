import { TestBed } from "@angular/core/testing";

import { GossipService } from "./gossip.service";

describe("GossipService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: GossipService = TestBed.get(GossipService);
    expect(service).toBeTruthy();
  });
});
