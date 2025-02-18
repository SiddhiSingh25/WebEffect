import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from "./App"
function WrapperRouter(){
    return(<>
    <BrowserRouter>
    <App></App>
    </BrowserRouter></>)
  }
  export default WrapperRouter