import { Manifest } from "https://deno.land/x/robo_arkiver@v0.4.14/mod.ts";
import { molek } from "./molek.ts";
import { CreateAsk } from "./entities/marketplace.ts";
import {
  onAcceptAsk,
  onCancelAsk,
  onCreateAsk,
} from "./handlers/marketplace.js";

const manifest = new Manifest("molek-asks");

manifest
  .addEntity([CreateAsk])
  .chain("fuji")
  .contract(molek)
  .addSources({ "0xb9606333ae6dd0b8c5ddd4ff19f55f4ef7fdc7d1": 23624000n })
  .addEventHandlers({ "CreateAsk": onCreateAsk })
  .addEventHandlers({ "CancelAsk": onCancelAsk })
  .addEventHandlers({ "AcceptAsk": onAcceptAsk });

export default manifest
  .build();
