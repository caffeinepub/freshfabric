import List "mo:core/List";
import Time "mo:core/Time";
import Migration "migration";

(with migration = Migration.run)
actor {
  type Signup = {
    name : Text;
    city : Text;
    hasFungusIssue : Bool;
    phoneNumber : Text;
    email : Text;
    submittedAt : Int;
  };

  let signups = List.empty<Signup>();

  public shared ({ caller }) func submitSignup(
    name : Text,
    city : Text,
    hasFungusIssue : Bool,
    phoneNumber : Text,
    email : Text,
  ) : async () {
    let newSignup : Signup = {
      name;
      city;
      hasFungusIssue;
      phoneNumber;
      email;
      submittedAt = Time.now();
    };
    signups.add(newSignup);
  };

  public query ({ caller }) func getAllSignups() : async [Signup] {
    signups.toArray();
  };
};
