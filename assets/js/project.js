let newProject = [];
function addProject(event) {
    event.preventDefault();
  
    let projectName = document.getElementById("project-name").value;
    let startDate = Date.parse(document.getElementById("start-date").value);
    let endDate = Date.parse(document.getElementById("end-date").value);
    let description = document.getElementById("description").value;
  
    let nodeJs = document.getElementById("node-js").checked;
    if (nodeJs) {
      nodeJs = document.getElementById("node-js").value;
    } else {
      nodeJs = "";
    }
  
    let reactJs = document.getElementById("react-js").checked;
    if (reactJs) {
      reactJs = document.getElementById("react-js").value;
    } else {
      reactJs = "";
    }
  
    let javascript = document.getElementById("javascript").checked;
    if (javascript) {
      javascript = document.getElementById("javascript").value;
    } else {
      javascript = "";
    }
  
    let css = document.getElementById("css").checked;
    if (css) {
      css = document.getElementById("css").value;
    } else {
      css = "";
    }
  
    if (projectName == "") {
      return alert("Insert Project Name");
    } else if (description == "") {
      return alert("Insert Description");
    }
  
    let fileUpload = document.getElementById("input-blog-image").files;
    if (fileUpload.length != 0) {
      fileUpload = URL.createObjectURL(fileUpload[0]);
    } else {
      return alert("Insert Image");
    }
  
    let project = {
      projectName,
      startDate,
      endDate,
      post: getDistanceTime(),
      description,
      nodeJs,
      reactJs,
      javascript,
      css,
      fileUpload,
    };
  
    newProject.push(project);
  
    renderProject();
}
  
function renderProject() {
    document.getElementById("card-one").innerHTML = "";
  
    for (let i = 0; i < newProject.length; i++) {
      document.getElementById("card-one").innerHTML += `
          <div class="card" id="card">
              <img src="${newProject[i].fileUpload}" alt="project" />
              <a href="/project-detail.html">${newProject[i].projectName}</a>
              <h5>duration : ${newProject[i].post}</h5>
              <p>${newProject[i].description}</p>
              <i class="${newProject[i].nodeJs}"></i>
              <i class="${newProject[i].reactJs}"></i>
              <i class="${newProject[i].javascript}"></i>
              <i class="${newProject[i].css}"></i>
              <div class="btn">
                <button class="edit">edit</button>
                <button class="delete">delete</button>
              </div>
              <p style="font-size: 15px; color:grey"></p>
            </div>
          `;
    }
}
  
function getDistanceTime() {
    let startDate = Date.parse(document.getElementById("start-date").value);
    let endDate = Date.parse(document.getElementById("end-date").value);
  
    let distance = endDate - startDate;
  
    let miliSecond = 1000;
    let secondInHours = 3600;
    let hoursInDay = 24;
    let dayInMonth = 31;
    let monthInYear = 12;
  
    let distanceYear = Math.floor(distance / (miliSecond * secondInHours * hoursInDay * dayInMonth * monthInYear));
    let distanceMonth = Math.floor(distance / (miliSecond * secondInHours * hoursInDay * dayInMonth));
    let distanceDay = Math.floor(distance / (miliSecond * secondInHours * hoursInDay));
  
    if (distanceYear > 0) {
      return `${distanceYear} year`;
    } else if (distanceMonth > 0) {
      return `${distanceMonth} month`;
    } else if (distanceDay > 0) {
      return `${distanceDay} day`;
    }
}