import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Review {
  'businessId' : string,
  'userId' : string,
  'feedback' : string,
  'rating' : bigint,
}
export interface _SERVICE {
  'getBusinessReviews' : ActorMethod<[], Array<Review>>,
  'insert' : ActorMethod<[string, bigint, string, string], Array<Review>>,
}
