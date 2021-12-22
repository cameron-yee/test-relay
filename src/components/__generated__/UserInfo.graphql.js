/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserInfo$ref: FragmentReference;
declare export opaque type UserInfo$fragmentType: UserInfo$ref;
export type UserInfo = {|
  +id: ?string,
  +name: ?string,
  +$refType: UserInfo$ref,
|};
export type UserInfo$data = UserInfo;
export type UserInfo$key = {
  +$data?: UserInfo$data,
  +$fragmentRefs: UserInfo$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserInfo",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '2d63038137a07a805c21ce4b4b2d5940';

module.exports = node;
