import React from "react";
import { JssProvider } from "react-jss";

const generateId = (rule, sheet) => "some-id";

export const ClassNameGenerator = () => {
  return (
    <JssProvider generateId={generateId}>
      <h2>Class name generator options</h2>
      <ClassNameGenerator />
    </JssProvider>
  );
};

// Make sure using the same setup on the server and on the client. Id generator is used for class names and for keyframes.

// You can change the class name generation algorithm by passing your custom generator function prop.

// import React from 'react'
// import ReactDOM from 'react-dom'
// import {JssProvider} from 'react-jss'
// import MyApp from './MyApp'

// const generateId = (rule, sheet) => 'some-id'
// ReactDOM.render(
//   <JssProvider generateId={generateId}>
//     <MyApp />
//   </JssProvider>,
//   document.getElementById('root')
// )
// You can add an additional prefix to each class, see here.

// You can minify class names by passing id prop, so that prefixes a not used, see also.

// import React from 'react'
// import ReactDOM from 'react-dom'
// import {JssProvider} from 'react-jss'
// import MyApp from './MyApp'

// ReactDOM.render(
//   <JssProvider id={{minify: true}}>
//     <MyApp />
//   </JssProvider>,
//   document.getElementById('root')
// )
