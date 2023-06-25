// Design database for Zen class programme

// users

db.users.insertMany([
    {
        student_id: 1,
        student_name: "Ram",
        student_email: "ram@gmail.com",
        mentor_id: 1

    },
    {

        student_id: 2,
        student_name: "Varma",
        student_email: "varma@gmail.com",
        mentor_id: 2

    },
    {

        student_id: 3,
        student_name: "Raghuvaran",
        student_email: "raghuvaran@gmail.com",
        mentor_id: 3

    },
    {

        student_id: 4,
        student_name: "Abdul",
        student_email: "Abdul@gmail.com",
        mentor_id: 4

    },
    {

        student_id: 5,
        student_name: "Rajesh",
        student_email: "rajesh@gmail.com",
        mentor_id: 5

    }
]);
// codekata
db.codekata.insertMany([
    {
        student_id: 1,
        solvedProblems: 45

    },
    {
        student_id: 2,
        solvedProblems: 70

    },
    {
        student_id: 3,
        solvedProblems: 68

    },
    {
        student_id: 4,
        solvedProblems: 100

    },
    {
        student_id: 5,
        solvedProblems: 30

    }

])
// attendance
db.attendance.insertMany([
    {
        student_id: 1,
        topic_id: 1,
        attendance: false,
        attenddate: new Date("15-oct-2020") 
    },
    {
        student_id: 2,
        topic_id: 2,
        attendance: false,
        attenddate: new Date("17-oct-2020"), 
    },
    {
        student_id: 3,
        topic_id: 3,
        attendance: true,
        attenddate: new Date("21-oct-2020"), 
    },
    {
        student_id: 4,
        topic_id: 4,
        attendance: false,
        attenddate: new Date("31-oct-2020"), 
    },
    {
        student_id: 5,
        topic_id: 5,
        attendance: false,
        attenddate: new Date("1-nov-2020"), 
    }

])
// topics
db.topics.insertMany([

    {
        topic_id: 1,
        topicname: "HTML",
        topic_date: new Date("11-oct-2020")

    },
    {
        topic_id: 2,
        topicname: "CSS",
        topic_date: new Date("15-oct-2020")

    },
    {
        topic_id: 3,
        topicname: "BOOTSTRAP",
        topic_date: new Date("19-oct-2020")

    },
    {
        topic_id: 4,
        topicname: "ADVANCE JS",
        topic_date: new Date("29-oct-2020")

    },
    {
        topic_id: 5,
        topicname: "REACT JS",
        topic_date: new Date("05-nov-2020")


    },
    {
        topic_id: 6,
        topicname: "MONGO DB",
        topic_date: new Date("15-nov-2020")


    },
    {
        topic_id: 7,
        topicname: "NODE JS",
        topic_date: new Date("20-nov-2020")


    }
])
// tasks
db.task.insertMany([

    {
        task_id: 1,
        topic_id: 1,
        student_id: 1,
        task: "HTML",
        taskdate: new Date("15-oct-2020"),
        submitted: false,
    },
    {
        task_id: 2,
        topic_id: 2,
        student_id: 2,
        task: "CSS",
        taskdate: new Date("25-oct-2020"),
        submitted: false,
    },
    {
        task_id: 3,
        topic_id: 3,
        student_id: 3,
        task: "BOOTSTRAP",
        taskdate: new Date("29-oct-2020"),
        submitted: true,
    },
    {
        task_id: 4,
        topic_id: 4,
        student_id: 4,
        task: "ADVANCE JS",
        taskdate: new Date("08-nov-2020"),
        submitted: false,
    },

    {
        task_id: 5,
        topic_id: 5,
        student_id: 5,
        task: "REACT JS",
        taskdate: new Date("20-nov-2020"),
        submitted: true,
    }

])
// company_drives
db.companydrives.insertMany([
    {

        student_id: 1,
        drivedate: new Date("15-oct-2020"),
        company: "Guvi",

    },
    {

        student_id: 1,
        drivedate: new Date("17-oct-2020"),
        company: "Codersbrain",

    },
    {

        student_id: 2,
        drivedate: new Date("30-oct-2020"),
        company: "Borche",

    },
    {

        student_id: 3,
        drivedate: new Date("01-nov-2020"),
        company: "Google",

    }
])

// mentors
db.mentor.insertMany([
    {
        mentor_id: 1,
        name: 'Sanjay',
        mentees_count: 12
    },
    {
        mentor_id: 2,
        name: 'Dinesh',
        mentees_count: 15
    },
    {
        mentor_id: 3,
        name: 'Gowtham',
        mentees_count: 8
    },
    {
        mentor_id: 4,
        name: 'Bharath',
        mentees_count: 19
    },
    {
        mentor_id: 5,
        name: 'Hari',
        mentees_count: 5
    }


])







































db.users.insertMany([
    {
        student_id: 1,
        student_name: "Ram",
        student_email: "ram@gmail.com",
        mentor_id: 1

    },
    {

        student_id: 2,
        student_name: "Varma",
        student_email: "varma@gmail.com",
        mentor_id: 2

    },
    {

        student_id: 3,
        student_name: "Raghuvaran",
        student_email: "raghuvaran@gmail.com",
        mentor_id: 3

    },
    {

        student_id: 4,
        student_name: "Abdul",
        student_email: "Abdul@gmail.com",
        mentor_id: 4

    },
    {

        student_id: 5,
        student_name: "Rajesh",
        student_email: "rajesh@gmail.com",
        mentor_id: 5

    }
]);

db.codekata.insertMany([
    {
        student_id: 1,
        solvedProblems: 45

    },
    {
        student_id: 2,
        solvedProblems: 70

    },
    {
        student_id: 3,
        solvedProblems: 68

    },
    {
        student_id: 4,
        solvedProblems: 100

    },
    {
        student_id: 5,
        solvedProblems: 30

    }

])

db.topics.insertMany([

    {
        topic_id: 1,
        topicname: "HTML",
        topic_date: new Date("11-oct-2020")

    },
    {
        topic_id: 2,
        topicname: "CSS",
        topic_date: new Date("15-oct-2020")

    },
    {
        topic_id: 3,
        topicname: "BOOTSTRAP",
        topic_date: new Date("19-oct-2020")

    },
    {
        topic_id: 4,
        topicname: "ADVANCE JS",
        topic_date: new Date("29-oct-2020")

    },
    {
        topic_id: 5,
        topicname: "REACT JS",
        topic_date: new Date("05-nov-2020")


    },
    {
        topic_id: 6,
        topicname: "MONGO DB",
        topic_date: new Date("15-nov-2020")


    },
    {
        topic_id: 7,
        topicname: "NODE JS",
        topic_date: new Date("20-nov-2020")


    }
])

db.task.insertMany([

    {
        task_id: 1,
        topic_id: 1,
        student_id: 1,
        task: "HTML",
        taskdate: new Date("15-oct-2020"),
        submitted: false,
    },
    {
        task_id: 2,
        topic_id: 2,
        student_id: 2,
        task: "CSS",
        taskdate: new Date("25-oct-2020"),
        submitted: true,
    },
    {
        task_id: 3,
        topic_id: 3,
        student_id: 3,
        task: "BOOTSTRAP",
        taskdate: new Date("29-oct-2020"),
        submitted: true,
    },
    {
        task_id: 4,
        topic_id: 4,
        student_id: 4,
        task: "ADVANCE JS",
        taskdate: new Date("08-nov-2020"),
        submitted: false,
    },

    {
        task_id: 5,
        topic_id: 5,
        student_id: 5,
        task: "REACT JS",
        taskdate: new Date("20-nov-2020"),
        submitted: true,
    }

])

db.mentor.insertMany([
    {
        mentor_id: 1,
        name: 'Sanjay',
        mentees_count: 12
    },
    {
        mentor_id: 2,
        name: 'Dinesh',
        mentees_count: 15
    },
    {
        mentor_id: 3,
        name: 'Gowtham',
        mentees_count: 8
    },
    {
        mentor_id: 4,
        name: 'Bharath',
        mentees_count: 19
    },
    {
        mentor_id: 5,
        name: 'Hari',
        mentees_count: 5
    }


])

db.attendence.insertMany([
    {
        student_id: 1,
        topic_id: 1,
        attendence: true,
    },
    {
        student_id: 2,
        topic_id: 2,
        attendence: true,
    },
    {
        student_id: 3,
        topic_id: 3,
        attendence: false,
    },
    {
        student_id: 4,
        topic_id: 4,
        attendence: false,
    },
    {
        student_id: 5,
        topic_id: 5,
        attendence: false,
    }

])

db.companydrives.insertMany([
    {

        student_id: 1,
        drivedate: new Date("15-oct-2020"),
        company: "Guvi",

    },
    {

        student_id: 1,
        drivedate: new Date("17-oct-2020"),
        company: "Codersbrain",

    },
    {

        student_id: 2,
        drivedate: new Date("30-oct-2020"),
        company: "Borche",

    },
    {

        student_id: 3,
        drivedate: new Date("01-nov-2020"),
        company: "Google",

    }
])

db.companydrives.find({ drivedate: { $gt: new Date("11-oct-2020"), $lt: new Date("31-oct-2020") } })

db.topics.aggregate([{
    $lookup: {
        from: "task",
        localField: "topic_id",
        foreignField: "topic_id",
        as: "task",
    },
}])



db.products.insertMany([
    {
        topic_id: 1,
        topicname: "HTML",
        topicdate: new Date("30-sep-2020")

    },
    {
        topic_id: 2,
        topicname: "HTML",
        topicdate: new Date("12-sep-2020")

    },
    {
        topic_id: 3,
        topicname: "HTML",
        topicdate: new Date("11-sep-2020")

    },
    {
        topic_id: 4,
        topicname: "HTML",
        topicdate: new Date("13-sep-2020")

    },




])
db.topics.inserMany([

    {
        task_id: 1,
        topic_id: 1,
        student_id: 3,
        task: "HTML",
        taskdate: new Date("17-nov-2020"),
        submitted: true,
    },

    {
        task_id: 2,
        topic_id: 2,
        student_id: 3,
        task: "CSS",
        taskdate: new Date("20-dec-2020"),
        submitted: true,
    },


])

db.companydrives.find({ drivedate: { $gt: new Date("11-oct-2020"), $lt: new Date("31-oct-2020") } })

db.task.find({ date: { $lt: new Date("1-oct-2023") } })


db.companydrives.aggregate([{
    $lookup: {
        from: "users",
        localField: "student_id",
        foreignField: "student_id",
        as: "drives",
    }
},

{
    $project: {
        _id: 0,
        company: 1,
        drivedate: 1,
        "drives.student_name": 1,
        "drives.student_email": 1,
        "drives.student_id": 1,
    },
},
]);
db.codekata.aggregate([{
    $lookup: {
        from: "users",
        localField: "student_id",
        foreignField: "student_id",
        as: "problemssolved",
    }

},
{
    $project: {
        _id: 0,
        solvedProblems: 1,
        "problemssolved.student_name": 1,


    }



}
])


db.mentor.find({ mentees_count: { $gt: 15 } })


db.topics.aggregate([{
    $lookup: {
        from: "task",
        localField: "topic_id",
        foreignField: "topic_id",
        as: "topic",
    }
},
{
    $match: {
        $and: [{
            $or: [
                { topic_date: { $gt: new Date("30-sep-2020") } },
                { topic_date: { $lt: new Date("1-nov-2020") } },
            ],
        },

        {
            $or: [
                { "topic.taskdate": { $gt: new Date("30-sep-2020") } },
                { "topic.taskdate": { $lt: new Date("1-nov-2020") } },
            ],
        },
        ],
    },
},
]);


db.topics.aggregate([{
    $lookup: {
        from: "task",
        localField: "topic_id",
        foreignField: "topic_id",
        as: "topic",
    }
},
{
    $match: {
        $and:
            [{ topic_date: { $gt: new Date("31-sep-2020"), $lt: new Date("01-nov-2020") } },
            { "topic.taskdate": { $gt: new Date("31-sep-2020"), $lt: new Date("01-nov-2020") } }]


    }
}

])



db.task.aggregate([{
    $lookup: {
        from: "attendance",
        localField: "student_id",
        foreignField: "student_id",
        as: "submitted",
    }
},
{
    $match: {
        $and:
            [{ topic_date: { $gt: new Date("31-sep-2020"), $lt: new Date("01-nov-2020") } },
            { "submitted.taskdate": { $gt: new Date("31-sep-2020"), $lt: new Date("01-nov-2020") } }]


    }
}

])
