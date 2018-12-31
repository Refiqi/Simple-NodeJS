const express = require('express');
const port = process.env.PORT || 3000
let app = express();
app.listen(port);
app.use('/assets', express.static(__dirname + '/public'));
app.use('/img', express.static(__dirname + '/public/img'));
app.get('/', (req, res) => {

  res.send(`

        <!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width" />
        <meta name="format-detection" content="telephone=no" />

        <link href='http://fonts.googleapis.com/css?family=Rufina|Open+Sans' rel='stylesheet' type='text/css'>

        <link rel="stylesheet" type="text/css" href="/assets/index.css" />
        <link rel="stylesheet" type="text/css" href="/assets/style.css" />
        <link rel="stylesheet" type="text/css" href="/assets/responsice.css" />

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>

        <title>Refiqi Story</title>
    </head>

    <body>

        <header>

            <div class="header_cont">

                <nav>
                    <a href="#" id="about">About</a> | <a href="#" id="calendar">Schedule</a> | <a href="#" id="contact">Contact</a>
                </nav>

                <h1>I'm <a href="#" id="about_title">Refiqi Muhamad Fadila</a>.</h1>
                <p>I'm a Junior Back-end Web Developer.You can find my schedule and Contact info here.</p>

                <div class="open_header"><a href="#">&nbsp;</a></div>

            </div>

        </header>

        <section class="about">
            <h2>Here's Some Stuff About Me</h2>
            <div class="content">

                <div class="row">
                    <div class="left picture"><img src="img/Refiqi.jpg" alt="I'm a back-end dev" /></div>
                    <div class="right caption">
                        I'm a Junior back-end web developer.
                    </div>
                </div>

                <div class="row">
                    <div class="right picture"><img src="img/Beach.jpg" alt="In Nongsa beach" /></div>
                    <div class="left caption">
                        Chill out in Nongsa beach.<a href="http://www.nongsaresorts.com/" alt="Nongsa Resort">Nongsa Resort</a>.
                    </div>
                </div>

                <div class="row">
                    <div class="left picture"><img src="img/GAxBinar.jpg" alt="NDP GlintsAcademy" /></div>
                    <div class="right caption">
                        My Classmate and Mentor.
                    </div>
                </div>

                <div class="row">
                    <div class="right picture"><img src="img/Lembang.jpg" alt="Lembang bandung" /></div>
                    <div class="caption2">
                        Having fun with highschool classmate at Lembang,Bandung.
                        Have mercy friend...
                    </div>
                </div>

            </div>
        </section>

        <section class="calendar">
            <h2>My Schedule</h2>
            <div class="content">

                <div class="calendar_entry">

                    <div class="show_title">Showcase Project</div>

                    <div class="left calendar_date">
                        <div class="month">Jan</div>
                        <span style="font-size: 2.5em;">15</span>
                    </div>

                    <div class="right calendar_info">

                        <p class="time">10:00am</p>
                        <p>Nongsa Digital Park</p>
                        <p>Batam city,Riau Islands</p>

                    </div>

                </div>

                <div class="calendar_entry">

                    <div class="show_title">Coming Home :D</div>

                    <div class="left calendar_date">
                        <div class="month">Dec</div>
                        <span style="font-size: 2.5em;">18</span>
                    </div>

                    <div class="right calendar_info">

                        <p class="time">4:00pm</p>
                        <p>Hang Nadhim Airport</p>
                        <p>Batam City,Riau Island</p>

                    </div>

                </div>

            </div>
        </section>

        <section class="contact">
            <h2>Stalk Me Here</h2>
            <div class="content">

                <a href="http://github.com/refiqi" target="_blank">Github</a> | <a href="https://www.linkedin.com/in/refiqi-fadila" target="_blank">Linked-in</a> <br>
                <a href="https://refiqi-cms-nodejs.herokuapp.com/" target="_blank">My-Blog</a>

            </div>
        </section>

        <script type="text/javascript" src="/assets/script.js"></script>
    </body>
</html>

`);
})

console.log('Running at localhost:3000')