import Map "mo:base/HashMap";
import Text "mo:base/Text";

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
    var slug : Slug = name;
    let entry : Entry = { 
      name = name;
      link = link;
    };
    lookuptable.put(slug, entry);
  };

  public query func lookup(name : Text) : async ?Entry {
    lookuptable.get(name)
  };

 

  func generateSlug(name : Text) : async Slug {
    let slug = Text.replace(name, " ", "-");
    if (lookuptable.get(slug) == null) {
      return slug;
    } else {
      let suffix = 1;
      if (lookuptable.get(slug + suffix.toText()) != null) {
        return Text.fromInt(suffix.toInt() + 1);
      } else {
        suffix += 1;
      }
    }
  }
};