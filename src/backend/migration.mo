import List "mo:core/List";

module {
  type OldSignup = {
    name : Text;
    city : Text;
    hasFungusIssue : Bool;
    phoneNumber : Text;
  };

  type OldActor = {
    signups : List.List<OldSignup>;
  };

  type NewSignup = {
    name : Text;
    city : Text;
    hasFungusIssue : Bool;
    phoneNumber : Text;
    email : Text;
    submittedAt : Int;
  };

  type NewActor = {
    signups : List.List<NewSignup>;
  };

  public func run(old : OldActor) : NewActor {
    let newSignups = old.signups.map<OldSignup, NewSignup>(
      func(oldSignup) {
        {
          name = oldSignup.name;
          city = oldSignup.city;
          hasFungusIssue = oldSignup.hasFungusIssue;
          phoneNumber = oldSignup.phoneNumber;
          email = "";
          submittedAt = 0;
        };
      }
    );
    { signups = newSignups };
  };
};
