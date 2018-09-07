const express = require("express");
const app = express();
const cohorts = require("./cohorts.json");
const port = 3000;

app.get("/", (request, response) => {
 response.json(cohorts);
});

app.get("/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const foundCohort = cohorts.find(cohort => id === cohort.ID);
  if (foundCohort) {
    response.json(foundCohort);
  } else {
    response.json(
      {
        error: {
            "message": "No record found!"
        }
      }
    );
  }
})

app.listen(port, () => console.log(`Server is listening on port ${port}`));