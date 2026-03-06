import List "mo:core/List";

actor {
  type Signup = {
    name : Text;
    city : Text;
    hasFungusIssue : Bool;
    phoneNumber : Text;
  };

  let signups = List.empty<Signup>();

  public shared ({ caller }) func submitSignup(name : Text, city : Text, hasFungusIssue : Bool, phoneNumber : Text) : async () {
    let newSignup : Signup = {
      name;
      city;
      hasFungusIssue;
      phoneNumber;
    };
    signups.add(newSignup);
  };

  public query ({ caller }) func getAllSignups() : async [Signup] {
    signups.toArray();
  };
};
