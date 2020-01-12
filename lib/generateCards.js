const generateHTML = require('./generateHTML');
const fs = require('fs');

const createCards = (manObj, engObj, intObj) => {
  const createManager = manObj.map(man => {
    return `<div class="card text-center" style="width: 18rem;">
    <div class="card-body">
      <h3 class="card-title">${man.name}</h3>
      <h4 id="name"><span class="fas fa-mug-hot"></span>${man.getRole()}</h4>
      <div class="card-text">
        <h5 id="id">ID: ${man.id}</h5>
        <h5 id="email">Email: ${man.email}</h5>
        <h5 id="officenumber">Office Number: ${man.officenumber}</h5>
      </div>
    </div>
  </div>`
  });

  const createEngineer = engObj.map(eng => {
    return `<div class="card text-center" style="width: 18rem;">
    <div class="card-body">
      <h3 class="card-title">${eng.name}</h3>
      <h4 id="name"><span class="fas fa-glasses"></span>${eng.getRole()}</h4>
      <div class="card-text">
        <h5 id="id">ID: ${eng.id}</h5>
        <h5 id="email">Email: ${eng.email}</h5>
        <h5 id="github">GitHub Username: ${eng.github}</h5>
      </div>
    </div>
  </div>`
  });

  const createIntern = intObj.map(int => {
    return `<div class="card text-center" style="width: 18rem;">
    <div class="card-body">
      <h3 class="card-title">${int.name}</h3>
      <h4 id="name"><span class="fas fa-graduation-cap"></span>${int.getRole()}</h4>
      <div class="card-text">
        <h5 id="id">ID: ${int.id}</h5>
        <h5 id="email">Email: ${int.email}</h5>
        <h5 id="school">School: ${int.school}</h5>
      </div>
    </div>
  </div>`
  });


const createHTML = generateHTML(createManager, createEngineer, createIntern);

fs.writeFile("../output/team.html", createHTML, function(err) {
  if(err) {
    return console.log(err);
  }
})
};

module.exports = createCards;