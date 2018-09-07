const express = require("express");
const app = express();
const cohorts = require("./cohorts.json");
const cors = require("cors")
const port = 3000;

app.use(cors());

app.get("/", (request, response) => {
 response.json({data: cohorts});
});

app.get("/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const foundCohort = cohorts.filter(cohort => id === cohort.ID);
  if (foundCohort) {
    response.json({data: foundCohort});
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