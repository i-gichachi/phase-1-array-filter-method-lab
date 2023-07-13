const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"]

const driverObjects = [
    {name: "Bobby", hometown: "Pittsburgh"},
    {name: "Sammy", hometown: "New York"},
    {name: "Sally", hometown: "Cleveland"},
    {name: "Annette", hometown: "Los Angeles"},
    {name: "Bobby", hometown: "Tampa Bay"}
  ]

  function findMatching(drivers, query){
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase())
  }

  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()))
  }
  
  function matchName(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase())
  }

  console.log(findMatching(drivers, "Bobby"))
  console.log(fuzzyMatch(drivers, "Sa"))
  console.log(matchName(driverObjects, "Bobby"))

