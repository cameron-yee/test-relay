/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserPosts$ref: FragmentReference;
declare export opaque type UserPosts$fragmentType: UserPosts$ref;
export type UserPosts = {|
  +data: ?$ReadOnlyArray<?{|
    +body: ?string,
    +comments: ?{|
      +data: ?$ReadOnlyArray<?{|
        +body: ?string,
        +email: ?string,
      |}>
    |},
    +title: ?string,
  |}>,
  +$refType: UserPosts$ref,
|};
export type UserPosts$data = UserPosts;
export type UserPosts$key = {
  +$data?: UserPosts$data,
  +$fragmentRefs: UserPosts$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "body",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserPosts",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Post",
      "kind": "LinkedField",
      "name": "data",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "CommentsPage",
          "kind": "LinkedField",
          "name": "comments",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Comment",
              "kind": "LinkedField",
              "name": "data",
              "plural": true,
              "selections": [
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "email",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "PostsPage",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '202c037d774d2fc155e7b369d34edfe9';

module.exports = node;
