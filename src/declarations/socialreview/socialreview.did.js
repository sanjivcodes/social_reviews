export const idlFactory = ({ IDL }) => {
  const Entry = IDL.Record({ 'link' : IDL.Text, 'name' : IDL.Text });
  return IDL.Service({
    'greet' : IDL.Func([IDL.Text], [IDL.Text], []),
    'insert' : IDL.Func([IDL.Text, IDL.Text], [], []),
    'lookup' : IDL.Func([IDL.Text], [IDL.Opt(Entry)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
