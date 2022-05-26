export const ServerSideRendering = () => {
  return (
    <div>
      <h2>Server Side Rendering react-jss</h2>
    </div>
  );
};

// After the application is mounted, you should remove the style tag used by critical CSS rendered server-side.

// import React from 'react'
// import {renderToString} from 'react-dom/server'
// import {JssProvider, SheetsRegistry, createGenerateId} from 'react-jss'
// import MyApp from './MyApp'

// export default function render(req, res) {
//   const sheets = new SheetsRegistry()
//   const generateId = createGenerateId()

//   const body = renderToString(
//     <JssProvider registry={sheets} generateId={generateId}>
//       <MyApp />
//     </JssProvider>
//   )

//   // Any instances using `useStyles` within `<MyApp />` will have gotten sheets
//   // from `context` and added their Style Sheets to it by now.

//   return res.send(
//     renderToString(
//       <html lang="en">
//         <head>
//           <style type="text/css">{sheets.toString()}</style>
//         </head>
//         <body>{body}</body>
//       </html>
//     )
//   )
// }
