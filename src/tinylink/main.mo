import Map "mo:base/HashMap";
import Text "mo:base/Text";
import Nat "mo:base/Nat";


actor {

  type Link = Text;
  type Slug = Text;
  type Name = Text;

  type Entry = {
    name: Text;
    link: Text;
  };

  let lookuptable = Map.HashMap<Slug, Entry>(0, Text.equal, Text.hash);

  public func insert(name : Text, link : Text): async () {
    var slug : Slug = await generateSlug(name);
    let entry : Entry = { 
      name = name;
      link = link;
    };
    lookuptable.put(slug, entry);
  };

  public query func lookup(name : Text) : async ?Entry {
    lookuptable.get(name)
  };

  // var links : [Entry] = [];
  //  public query func getLinks() : async Text {
  //   return Utils.show(todos);
  // };


  func generateSlug(name : Text) : async Slug {
    var slug = Text.replace(name, #text " ", "-");
    if (lookuptable.get(slug) == null) {
      // no existing slug
    } else {
      var suffix = 0;
      while (lookuptable.get(slug)!= null) {
        suffix += 1;
        slug := Text.concat(slug, Nat.toText(suffix));
      };
      
    };
    return slug;
  }
};
