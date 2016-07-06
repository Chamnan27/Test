/**
 * Created by chamnan on 3/24/16.
 */
FlowRouter.route('/', {
    action: function(params) {
        BlazeLayout.render("MainLayout", {content: "home"});
    }
});