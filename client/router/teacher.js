// /**
//  * Created by chamnan on 3/24/16.
//  */
FlowRouter.route('/teacher', {
    name: "teacher",
    action: function(params) {
        BlazeLayout.render("MainLayout", {content: "teacher"});

    }
});
FlowRouter.route('/teacherInsert', {
    name: "teacherInsert",
    action: function(params) {
        BlazeLayout.render("MainLayout", {content: "teacherInsert"});

    }
});
FlowRouter.route('/teacherUpdate/:id', {
    name:"teacherUpdate",
    action: function(params,queryParams) {
        BlazeLayout.render("MainLayout", {content: "teacherUpdate"});

    }
});