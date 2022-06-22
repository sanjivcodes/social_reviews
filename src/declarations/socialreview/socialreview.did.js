export const idlFactory = ({ IDL }) => {
  const Review = IDL.Record({
    'businessId' : IDL.Text,
    'userId' : IDL.Text,
    'feedback' : IDL.Text,
    'rating' : IDL.Nat,
  });
  return IDL.Service({
    'getBusinessReviews' : IDL.Func([], [IDL.Vec(Review)], ['query']),
    'insert' : IDL.Func(
        [IDL.Text, IDL.Nat, IDL.Text, IDL.Text],
        [IDL.Vec(Review)],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
