# Unit 19 React Homework: Employee Directory

## Overview

For this assignment, you'll create a employee directory with React. This assignment will require you to break up your application's UI into components, manage component state, and respond to user events.

## User Story

* As a user, I want to be able to view my entire employee directory at once so that I have quick access to their information.

## Business Context

An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.

## Acceptance Criteria

Given a table of random users, when the user loads the page, a table of employees should render. 

The user should be able to:

  * Sort the table by at least one category

  * Filter the users by at least one property.

## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

1. Your commit history is a signal to employers that you are actively working on projects and learning new skills

2. Your commit history allows you to revert your code base in the event that you need to return to a previous state

Follow these guidelines for committing:

* Make single purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits

* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history

* Don't commit half done work, for the sake of your collaborators (and your future self!)

* Test your application before you commit to ensure functionality at every step in the development process

We would like you to have well over 200 commits by graduation, so commit early and often!


## Submission on BCS

You are required to submit the following:

* the URL to the deployed application

* the URL to the Github repository

Homework Guidance
1. App will have one "container" to maintain state. Call it something like `EmployeeManager` or more generally, `DataArea`
2. App will have multiple "components" to display data and interact with state. Components will include
- DataTable
- DataBody
- Header
- Nav
- SearchBox
3. You should have a high order component to wrap the nav bar and the DataArea. This order component
is what will be whats returned from the highest level `App` Component. 
4. You dont need to write an express server and database, instead you can use this API to get fake employee data:
https://randomuser.me/
4a) Use axios to fetch data from this API
Hint 1)
All of the application logic will live in the application container
Hint 2)
To do the sorting here is a comparator function:
(edited)





9:04
    const compareFnc = (a, b) => {
      if (this.state.order === "ascend") {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // numerically
        else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else {
          return a[heading] - b[heading];
        }
      } else {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // numerically
        else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      }
    }

Evan Arbeitman  1:21 PM
hey @channel wanted to clarify one of the hints I gave out early
1:21
3. You should have a high order component to wrap the nav bar and the DataArea. This order component
1:22
There isnt a navbar component
1:22
The table header needs to have a column to search by (i.e name)
1:22
the higher level container will hold both the search bar and the table itself.
1:23
So there will be a page header and a table header. Nav bar was meant to be table header