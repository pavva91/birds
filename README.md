# Birds Coding Game

## Run Test suite (TL;DR)

I didn't compress node_modules. From the root of the repository run:

```shell
npm install
```

```shell
npm run coverage
```

or, simply:

```shell
npm test
```

## Run Golang Test Suite

prerequisite: go must be installed on the machine

```shell
npm run golang
```

To get code coverage:

```shell
npm run gocoverage
```

## Instructions

Implement the following coding game in Typescript. Each method needs to be properly documented
and tested. The format is up to you, you can either implement it as component, a service, or directly
as a helper.

### Language

Typescript

### Expected outcome

At least 2 files, one containing the requested methods and the other their test suite. Feel free to join
any additional content you might have created, along with notes on the method you used, the time
it took you, or any question or remark you might have following the exercise.

## Coding game

A bird watcher records all the bird sightings in the area, associating each bird type to a given id.
The sightings are stored randomly in an array of number, where every element represents a bird
type id.

### Example

arr = [1, 1, 2, 2, 3]
There are two each of types 1 and 2, and one sighting of type 3.

### Question 1

Implement the method getMostFrequentSighting, that determines the id of the most frequently
sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of
their ids.

#### Function Description

getMostFrequentSighting has the following signature

- Entry point parameter
  - int birds[n]: the types of birds sighted
- Returns int: the lowest type id of the most frequently sighted birds

#### Example

arr = [1, 1, 2, 2, 3]
There are two each of types 1 and 2, and one sighting of type 3. The most frequently spotted bird
here is type 1 (lower of the two types seen twice).

### Question 2

Implement the method getLatestFirstSighting, that determines the id of the bird type that was
spotted for the first time at the latest.

#### Function Description

getLatestFirstSighting has the following signature

- Entry point parameter
  - int birds[n]: the types of birds sighted
- Returns int: the latest type that was spotted for the first time

#### Example

arr = [1, 1, 2, 3, 2]
The latest type that was spotted for the first time is type 3.

## Solution

### Run TS/Node Application

### Run the index.ts in src

```shell
npx ts-node src
```

### Run a specific file

```shell
npx ts-node src/hello.ts
```

### Compile TS Application into JS

```shell
npx tsc src/hello.ts
```

will create the file: src/hello.js

#### Run JS Application with node

```shell
node src/hello.js
```

### Run Tests (jest)

```shell
npx jest
```

or:

```shell
npm test
```

or:

```shell
npm run test
```

#### Run Tests with logs

```shell
npx jest --silent=false
```

#### Run Tests with coverage

```shell
npx jest --coverage
```
