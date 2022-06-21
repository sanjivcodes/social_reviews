import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Entry { 'link' : string, 'name' : string }
export interface _SERVICE {
  'greet' : ActorMethod<[string], string>,
  'insert' : ActorMethod<[string, string], undefined>,
  'lookup' : ActorMethod<[string], [] | [Entry]>,
}
