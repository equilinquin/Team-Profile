const generateHTML = require("./generateHTML");
const fs = require("fs");

const createCards = (manObj, engObj, intObj) => {
  const createManager = manObj.map(man => {
    return `<div class="card text-center shadow-sm" style="width: 18rem;">
    <div class="card-body bg-primary">
      <h3 class="card-title">${man.name}</h3>
      <h4 id="name"><i class="fas fa-mug-hot"></i>${man.getRole()}</h4>
      </div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${man.id}</li>
      <li class="list-group-item">Email: ${man.email}</li>
      <li class="list-group-item">Office Number: ${man.officenumber}</li>
    </ul>
  </div>`;
  });

  const createEngineer = engObj.map(eng => {
    return `<div class="card text-center shadow-sm" style="width: 18rem;">
    <div class="card-body bg-primary">
      <h3 class="card-title">${eng.name}</h3>
      <h4 id="name"><i class="fas fa-glasses"></i>${eng.getRole()}</h4>
      </div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${eng.id}</li>
      <li class="list-group-item">Email: ${eng.email}</li>
      <li class="list-group-item">GitHub Username: ${eng.github}</li>
    </ul>
  </div>`;
  });

  const createIntern = intObj.map(int => {
    return `<div class="card text-center shadow-sm" style="width: 18rem;">
    <div class="card-body bg-primary">
      <h3 class="card-title">${int.name}</h3>
      <h4 id="name"><i class="fas fa-graduation-cap"></i>${int.getRole()}</h4>
      </div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${int.id}</li>
      <li class="list-group-item">Email: ${int.email}</li>
      <li class="list-group-item">School: ${int.school}</li>
    </ul>
  </div>`;
  });

  const createHTML = generateHTML(createManager, createEngineer, createIntern);

  fs.writeFileSync("./output/team.html", createHTML, function(err) {
    if (err) {
      return console.log(err);
    }
  });
};

module.exports = createCards;
