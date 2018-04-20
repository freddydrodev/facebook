import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";
import React from "react";
import ReactDOM from "react-dom";
import MessengerCustomerChat from "react-messenger-customer-chat";

import "./main.html";

Meteor.startup(() => {
  ReactDOM.render(
    <MessengerCustomerChat
      pageId="825145917695252"
      appId="1592613690857264"
      htmlRef="ixi"
    />,
    document.getElementById("root")
  );
});

Template.login.events({
  "click .login-facebook": function(e) {
    e.preventDefault();

    Meteor.loginWithFacebook(
      {
        requestPermissions: ["user_friends", "public_profile", "email"]
      },
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("login successfully");
          // successful login!
        }
      }
    );
  }
});
