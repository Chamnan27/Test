TabularTables = {};

TabularTables.Teacher = new Tabular.Table({
    name: "Teacher",
    collection: Teacher,
    columns: [
        {data: "name", title: "Name"},
        {data: "gender", title: "Gender"},
        {data: "address", title: "Address"},
        {title: 'Exit', tmpl: Meteor.isClient && Template.teacherActions}

    ]
});