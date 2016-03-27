# Build An API for Meowtown™

## Learning Competencies
- Design and architect an API for the public with good documentation.

## Summary

Your mission: Design and document an API against Meowtown.
This API is meant to be consumed by the public. Think about how Twitter or
Github built their API against their app(s). You will be wearing an API designer/Architect
hat and think about how you want to expose data and services to the public just like
Twitter and Github did.


## Endpoints ([what's an API Endpoint?](http://bit.ly/1jIgbNw))
- `[GET]` list of cats
- `[GET]` a cat by id
- `[POST]` create a cat 
- `[PUT]` modify a cat by id 
- `[DELETE]` delete a cat by id 

We're making a RESTful API!

## Releases
**Note about testing:** *Tests, especially while building an API are NOT optional or nice to have.
In general, an untested app is not worth having ;) Today, we're going to try to TDD our way through this app. 
We're going to use the testing library [supertest.](https://github.com/visionmedia/supertest)

1. Decide which endpoint you want to write.
2. Add a section in the README describing the behavior of that endpoint.
3. Write the simplest failing test you can think of for that endpoint.
4. See the test fail.
5. Write code to make that test pass.
6. return to step 3. If there is nothing else you can test on that endpoint, return to step 1.

### Release 0: Documentation
Designing an API starts with documentation. Without proper and detailed documentation
an API would not be dependable. What should you include? Let's follow [Twitter's REST API](https://dev.twitter.com/docs/api/1.1) model.
We will not implement or write a single piece of code until we get our documentation right, this is an
essential part of this exercise and it's not trivial. Rename this file to `lesson.md` and replace it with your `README.md` file.

### Release 1: Implement GET requests
_pending approval of documentation from an instructor_

Implement the following endpoints:
- `[GET]` list of cats
- `[GET]` a cat by id

### Release 2: Implement POST, PUT and DELETE requests
_pending approval of documentation from an instructor_

Implement the following endpoints:
- `[POST]` create a cat 
- `[PUT]` modify a cat by id 
- `[DELETE]` delete a cat by id 
