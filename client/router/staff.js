/**
 * Created by chamnan on 3/24/16.
 */
FlowRouter.route('/staff', {
    name: "staff",
    action: function(params) {
        BlazeLayout.render("MainLayout", {content: "staff"});

    }
});
FlowRouter.route('/staffInsert', {
    name: "staffInsert",
    action: function(params) {
        BlazeLayout.render("MainLayout", {content: "staffInsert"});

    }
});
FlowRouter.route('/staffUpdate/:id', {
    name:"staffUpdate",
    action: function(params, queryParams) {
        BlazeLayout.render("MainLayout", {content: "staffUpdate"});

    }
});