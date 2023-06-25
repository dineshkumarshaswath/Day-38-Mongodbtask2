
// 1. Find all the topics and tasks which are thought in the month of October

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


//2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.companydrives.find({drivedate:{$gt:new Date("11-oct-2020"),$lt:new Date("31-oct-2020")}})

// 3.Find all the company drives and students who are appeared for the placement.

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

//4. Find the number of problems solved by the user in codekata

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
         solvedProblems:1,
        "problemssolved.student_name": 1,
       
        
    }



}
])


//5. Find all the mentors with who has the mentee's count more than 15
db.mentor.find({mentees_count:{$gt:15}})


//6. Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020


db.task.aggregate([{
  
    $lookup: {
        from: "attendance",
        localField: "student_id",
        foreignField: "student_id",
        as: "studentdetails",
    }
   
},

{ 
    $match: 
 
        { $and:[{taskdate: { $gte: new Date("15-oct-2020"), $lte: new Date("31-oct-2020")  }},
        {submitted:false},
      
        {"studentdetails.attenddate": { $gte: new Date("15-oct-2020"), $lte: new Date("31-oct-2020")  }},
        {"studentdetails.attendance":false}

    ]
    }
         
},{$count:"count of students"},




])