let dayButton = document.getElementById("dialy");
let weekButton = document.getElementById("weekly");
let monthButton = document.getElementById("monthly");


function setData(time, timeFram, title) {
  let query1 = `.${title} .${timeFram} #cur`;
  // console.log(query1);
  document.querySelector(query1).innerHTML = time["current"];
  let query2 = `.${title} .${timeFram} #prev`;
  // console.log(query2);
  document.querySelector(query2).innerHTML =
    time["previous"];
}

fetch("data.json")
  .then((respose) => {
    if (!respose.ok) return "Shit";
    // console.log(respose);
    return respose.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      // console.log(
      //   element["timeframes"]["daily"],
      //   "day",
      //   element["title"].toLowerCase()
      // );
      setData(
        element["timeframes"]["daily"],
        "day",
        element["title"].toLowerCase()
      );
      setData(
        element["timeframes"]["weekly"],
        "week",
        element["title"].toLowerCase()
      );
      setData(
        element["timeframes"]["monthly"],
        "month",
        element["title"].toLowerCase()
      );
    });
  });




dayButton.onclick = ()=>{
  weekButton.classList.remove("active");
  monthButton.classList.remove("active");

  dayButton.classList.add("active");

  let wrappers = document.querySelectorAll(".wrapper");

  wrappers.forEach((wrapper)=>{
    wrapper.dataset.type = 'day';
  })
}
weekButton.onclick = ()=>{
  dayButton.classList.remove("active");
  monthButton.classList.remove("active");

  weekButton.classList.add("active");

  let wrappers = document.querySelectorAll(".wrapper");

  wrappers.forEach((wrapper)=>{
    wrapper.dataset.type = 'week';
  })
}
monthButton.onclick = ()=>{
  weekButton.classList.remove("active");
  dayButton.classList.remove("active");

  monthButton.classList.add("active");

  let wrappers = document.querySelectorAll(".wrapper");

  wrappers.forEach((wrapper)=>{
    wrapper.dataset.type = 'month';
  })
}


