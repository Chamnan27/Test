Template.teacher.events({
    'click.js-add-new': function () {
        FlowRouter.go('/teacherInsert');
    },
    'click.jsUpdate': function () {

    }
});
//insert>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Template.teacherInsert.helpers({
//     data: function () {
//         return Teacher.find();
//     }
// });
//button go back>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Template.teacherInsert.events({
    'click.js-go-back': function () {
        FlowRouter.go('/teacherInsert');
    },
    'click .jsSave': function () {
        var _id = $('#_id').val();
        var name = $('#name').val();
        var gender = $('#gender').val();
        var address = $('#address').val();

        // increment the counter when button is clicked
        if(name=="" ||
            gender==""||
            address==""){

            // alert('ត្រូវតែបញ្ចូល');
            // Bert.alert( 'hi not input!', 'danger', 'growl-top-right' );
            FlowRouter.go('/teacherInsert');


        }else

        {
            Teacher.insert({
                name: name,
                gender: gender,
                address: address
                // id: id

            });
            FlowRouter.go('/teacher');
            alert('បញ្ចូលរួចហ្យើ');

        }

        // var id = $('#id').val('');
        // var name = $('#name').val('');
        // var gender = $('#gender').val('');
        // var address = $('#address').val('');
    }
});
Template.teacherUpdate.helpers({
    data: function () {
        var id = FlowRouter.getParam('id');
        var info = Teacher.findOne({_id: id});
        return info;

    }
});
Template.teacherUpdate.events({
    //update data by using id="update button"........
    'click .jsUpdate': function () {
        var _id = $('#_id').val();
        var name = $('#name').val();
        var gender = $('#gender').val();
        var address = $('#address').val();
        var set = {
            name: name,
            gender: gender,
            address: address

        };
        //finally updating
        Teacher.update(_id, {$set: set});
        alertify.success(' ហើយ');        //alertifyjs after updating.....
        FlowRouter.go('/teacher');
    }
});
Template.teacherActions.events({
    'click .jsUpdate': function () {
        // alert('hello')
        Bert.alert( '<h1>កែប្រែ</h1>', 'success', 'growl-top-right' );
        FlowRouter.go('teacherUpdate', {id: this._id});
        console.log(this._id)
    },
    'click .jsRemove': function () {
        var self = this;
        // Bert.alert( '<h1>លុប</h1>', 'danger', 'growl-top-right' );
        alertify.confirm("This is a confirm dialog.",
            function () {
                Teacher.remove(self._id);
                 alertify.success('Ok');

                console.log(this._id);
                FlowRouter.go('/teacher');
            },
            function () {
                FlowRouter.go('/teacher');

                 alertify.error('Cancel');

            });
    }
});

//staff>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

