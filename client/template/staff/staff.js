// Index
Template.staff.events({
    'click.jsAddNew': function () {
        FlowRouter.go('staffInsert');
    }
});

// Action
Template.staffActions.events({
    'click .jsUpdate': function () {
        // Bert.alert('<h1>កែប្រែ</h1>', 'success', 'growl-top-right');
        // alert('hello')
        FlowRouter.go('staffUpdate', {id: this._id});
        // console.log(this._id)
    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm(
            'Remove',
            'Are you sure to remove this!',
            function () {
                Staff.remove(self._id);
                Bert.alert('Success', 'danger', 'growl-top-right');
            },
            null
        );
    }
});

// Insert
Template.staffInsert.events({
    'click .jsSave': function () {
        var _id = $('#_id').val();
        var name = $('#name').val();
        var gender = $('#gender').val();
        var address = $('#address').val();

        // increment the counter when button is clicked
        if (name == "" ||
            gender == "" ||
            address == "") {
            Bert.alert('<h1>ត្រូវតែបញ្ចូលជាដាច់ខាត់</h1>', 'success', 'growl-top-right');
            // alert('ត្រូវតែបញ្ចូល​');
            FlowRouter.go('/staffInsert');
        } else {
            Staff.insert({
                name: name,
                gender: gender,
                address: address


            });
            alert('បញ្ចូល​រួចហ្យើ');
            FlowRouter.go('/staff');
        }


        // var id = $('#id').val('');
        // var name = $('#name').val('');
        // var gender = $('#gender').val('');
        // var address = $('#address').val('');
    }
});

// Update
Template.staffUpdate.helpers({
    data: function () {
        var id = FlowRouter.getParam('id');
        var info = Staff.findOne({_id: id});
        return info;
    }
});

Template.staffUpdate.events({
    //update data by using id="update button"........
    'click .jsSave': function () {
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
        Staff.update(_id, {$set: set});
        alertify.success(' ហើយ');        //alertifyjs after updating.....
        FlowRouter.go('/staff');
    }
});