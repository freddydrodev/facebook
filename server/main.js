import { Meteor } from "meteor/meteor";
import { ServiceConfiguration } from "meteor/service-configuration";

Meteor.startup(() => {
  ServiceConfiguration.configurations.remove({ service: "facebook" });
  ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: "1940265332954355",
    secret: "b37ed093c072259df1c904b08c725839"
  });
});
