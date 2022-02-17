### run ``npm install` and `npm start`

### Questions

# 1 ) difference between Functional components and Class components

difference between function components and class components is that function components its' just plan stateless javascript function that use hooks to mange component lifecycle (used before hooks only to render the jsx), while class components also known as statful wich can use all react lifecycle method because they implement logic and state

# 2 ) rule of hooks

hooks cannot be called inside loops, conditions, or nested functions

hooks can be call only from react function components

# 3 ) useEffect

useEffect work just like componentDidMount or componentDidUpdate in class components

it manage side effects like fetching data or changing dom in components

by using it react will kown that he need to perform something after the components render or update by checking the dependency

note ::: useEffect run every time in the first render

# 3 ) why state instead of variables

we use state instead of variables to react kep the app sync with the ui view

exemple :: when you click on Button in count app react will update tha value of the count and re-render the view while if we use the variable it' will change the value in the memory only
