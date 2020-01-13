const Manager = require("./Manager");
const Intern = require("./Intern");
const Engineer = require("./Engineer");

function generateHTML(managerCard, engineerCard, InternCard) {
    return (`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
        <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
          integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
          crossorigin="anonymous"
        ></script>
        <style>
        .jumbotron {
          background-color: red;
        }
        h1 {
          color: white;
          font-weight: 100pz;
        }
        .card {
          margin: 10px;
        }
       .card-body {
          background-color: green;
        }
        h3, h4 {
          color: white;
        }
        i {
          margin-right: 5px;
        }
        .list-group {
          margin: 10px;
        }
      </style>
        <title>Team Profile</title>
      </head>
      <body>
          <div class="container">
            <div class="jumbotron jumbotron-fluid">
                <div class="text-center">
                  <h1>My Team</h1>
                </div>
              </div>
              <div class="row">
                ${managerCard}
                ${engineerCard}
                ${InternCard}
              </div>
          </div>
      </body>
    </html>
    `)
}

module.exports = generateHTML;