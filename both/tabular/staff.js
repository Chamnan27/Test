TabularTables = {};

TabularTables.Staff = new Tabular.Table({
    name: "Staff",
    collection: Staff,
    columns: [
        {data: "name", title: "Name"},
        {data: "gender", title: "Gender"},
        {data: "address", title: "Address"},
        {title: 'Edit', tmpl: Meteor.isClient && Template.staffActions}

    ]
});