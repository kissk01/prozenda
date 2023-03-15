# Prozenda Hungary Kft. test application

## User documentation - application description

### **Basic details of the app**

The application starts with header, search input and button, character list, sort and footer.

### **Search view**

Character search input is triggered with search button, empty chars are not triggered. On search application returns found items or no content message.

### **List view**

Character list. Each item contains **title**, **gender**. For view we use masonry layout. It shows max item and showed items count.

### **Sort view**

Sorts list ascending, descending and result by female or male.

### **Reset button and functionality**

Resets search to initial value (page 1 result) from load more state or search state.

### **Header**

Header shows application title, max item and showed items count.

### **Footer**

Footer shows year and application name.

## Technical documentation

### **IDE**

For coding I used Visual Studio, version: 1.76.1 with popular code formatters like styleint, prettier, intelliSense.

### **Packages**

Project is using typescript, react, material ui, for testing jest.

### **Typescript**

Project is using typescript both in application code and in tests.

### **useContext and useReducer**

The implementation is heavy for that small application, still we can use it if project grows.

### **API documentation**

As next we can think about generating swagger on server start and about implementing api tests in postman. For local api endpoint testing I used postman.

### **API requests**

1. [https://swapi.dev/api/people/] On success returns payload with count, next, previous, characters objects. Each item contains name and gender we need. Example payload:

```json
{
  "count": 82,
  "next": "https://swapi.dev/api/people/?cache=3&page=2",
  "previous": null,
  "results": [
    {
      "name": "Luke Skywalker",
      "gender": "male"
    }
  ]
}
```

2. [https://swapi.dev/api/people/?search=${searchTerm}] On found returns payload with count, next, previous, characters objects. Each item contains name and gender we need. Example payload:

```json
{
  "count": 82,
  "next": "https://swapi.dev/api/people/?cache=3&page=2",
  "previous": null,
  "results": [
    {
      "name": "Luke Skywalker",
      "gender": "male"
    }
  ]
}
```

## Roadmap

### **Test - code coverage**

I only covered with unit tests function in libs directory. Sofar I added 3 separate test cases. In the future we should increase amount of tests.

### **Fetching**

We can think about eliminating useFetch hooks, using react query or swr.

### **Usecontext, usereducer**

For more complex project, think about using redux toolkit.

### **Writing Reducers with Immer package**

Write simpler immutable update logic using "mutating" syntax. This helps simplify implementations in reducer.

### **Using in mobile applications**

Application is not tested, runed yet on mobile. As next we can think of running it on mobiles.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173/](http://localhost:5173/) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner.\
Some basic unit tests are implemente for sort libs.
