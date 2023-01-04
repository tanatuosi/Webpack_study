import React from "react"
import ReactDOM from "react-dom"
import Home from "./Home.tsx"
import '@engine/table'
// import { ParameterButton } from '@engine/controller';
// export default function App() {
//   return (
//     <div>
//       <h2>我是react</h2>
//       <Home />
//     </div>
//   )
// }
// BI.createWidget({
//   type: ParameterButton.xtype,
//   element: '#root',
//   text: '点我！',
//   width: 200,
//   listeners: [{
//       eventName: 'click',
//       action: () => {
//           alert('我被点击了！');
//       },
//   }],
// });

BI.createWidget({
  element: '#root',
  type: "bi.center_adapt",
  width: 300,
  height: 300,
  items: [{
      type: "bi.button",
      text: "这是一个按钮"
  }]
});


// const root = document.getElementById("root")
// ReactDOM.render(<App />, root)