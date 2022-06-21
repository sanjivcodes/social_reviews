import Map "mo:base/HashMap";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import List "mo:base/List";
import Iter "mo:base/Iter";
import Array "mo:base/Array";


actor {

  // type Link = Text;
  // type Slug = Text;

  // type Entry = {
  //   name: Text;
  //   link: Text;
  // };

  type Review = {
    rating: Nat;
    feedback: Text;
    userId: Text;
    businessId: Text;
  };

  var BusinessReviews : [Review] = [];

  public func insert(userId : Text, rating: Nat, feedback: Text, businessId: Text): async [Review] {
    let reviewItem : Review = {
      userId = userId;
      rating = rating;
      feedback = feedback;
      businessId = businessId;
    };
    let newReview : [Review] = [reviewItem];
    BusinessReviews := Array.append(BusinessReviews,newReview);
    return BusinessReviews;
  };


  public query func getBusinessReviews() : async [Review] {
    return BusinessReviews;
  };
  
  
};

  // let lookuptable = Map.HashMap<Slug, Entry>(0, Text.equal, Text.hash);

  // public func insertOld(name : Text, link : Text): async () {
  //   var slug : Slug = await generateSlug(name);
  //   let entry : Entry = { 
  //     name = name;
  //     link = link;
  //   };
  //   lookuptable.put(slug, entry);
  // };

  // public query func lookup(name : Text) : async ?Entry {
  //   lookuptable.get(name)
  // };

  // // var links : [Entry] = [];
  // //  public query func getLinks() : async Text {
  // //   return Utils.show(todos);
  // // };


  // func generateSlug(name : Text) : async Slug {
  //   var slug = Text.replace(name, #text " ", "-");
  //   if (lookuptable.get(slug) == null) {
  //     // no existing slug
  //   } else {
  //     var suffix = 0;
  //     while (lookuptable.get(slug)!= null) {
  //       suffix += 1;
  //       slug := Text.concat(slug, Nat.toText(suffix));
  //     };
      
  //   };
  //   return slug;
  // };

  // public func greet(name : Text) : async Text {
  //   return "Hello, " # name # "!";
  // };
