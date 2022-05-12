var express = require('express');
const app = express();
const port =process.env.PORT||8210;

var games = [
    {
        "id":1,
        "start_time":"10.30 AM",
        "end_time":"12.20 AM",
        "team_name1":"Barcelona(BCN)",
        "team_name2":"Rome(ROM)",
        "date":"Tuesday,Apr21, 2020",
        "price":"56"
    },
    {
        "id":2,
        "start_time":"07.45 AM",
        "end_time":"03.40 PM",
        "team_name1":"Barcelona(BCN)",
        "team_name2":"Rome(ROM)",
        "date":"Tuesday,Apr21, 2020",
        "price":"68"
    },
    {
        "id":3,
        "start_time":"10.35 PM",
        "end_time":"03.50 PM",
        "team_name1":"Barcelona(BCN)",
        "team_name2":"Rome(ROM)",
        "date":"Tuesday,Apr21, 2020",
        "price":"82"
    },
    {
        "id":4,
        "start_time":"09.30 AM",
        "end_time":"08.45 AM",
        "team_name1":"Barcelona(BCN)",
        "team_name2":"Rome(ROM)",
        "date":"Tuesday,Apr21, 2020",
        "price":"91"
    },
    {
        "id":5,
        "start_time":"10.35 PM",
        "end_time":"03.50 PM",
        "team_name1":"Barcelona(BCN)",
        "team_name2":"Rome(ROM)",
        "date":"Tuesday,Apr21, 2020",
        "price":"82"
    },
    {
        "id":6,
        "start_time":"10.30 AM",
        "end_time":"12.20 AM",
        "team_name1":"Barcelona(BCN)",
        "team_name2":"Rome(ROM)",
        "date":"Tuesday,Apr21, 2020",
        "price":"56"
    },
]
//get

app.get('/',(req, res) => {
    res.send("welcome to Api section")
})

//employees
app.get('/games',(req, res) => {
    res.send(games)
})
app.listen(port,() => {
    console.log(`listening on port no ${port}`)
});