import {driver} from '@digitalbazaar/did-method-key';
import { create, read } from "./method";

import('@digitalbazaar/did-method-key')
  .then(async (module) => {
    const didKeyDriver = module.driver();
    let {didDocument, keyPairs, methodFor} = await didKeyDriver.generate();
    didDocument["service"] = {
      "id": `${didDocument.id}#didcomm-1`,
      "type": "DIDCommMessaging",
      "serviceEndpoint": [{
          "uri": "https://example.com/path",
          "accept": [
              "didcomm/v2",
              "didcomm/aip2;env=rfc587"
          ],
          "routingKeys": ["did:example:somemediator#somekey"]
      }]
    }
  
    const did = create(didDocument)
    console.log(did)
  
    const doc = read(did)
    console.log(doc)
  });
