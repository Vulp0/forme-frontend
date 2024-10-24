import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Browse from './Browse';
import Dashboard from './Dashboard';
import TemplateInfo from './TemplateInfo';
import CreateTemplate from './CreateTemplate';
import ManageUsers from './ManageUsers';
import TemplateList from './TemplateList';
import CommentList from './CommentList';
import ResultList from './ResultList';

function App() {

  return (
    <div id='contain'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/browse' element={<Browse />}></Route>
        <Route path='/template/:templateId' element={<TemplateInfo />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/create' element={<CreateTemplate />}></Route>
        <Route path='/management' element={<ManageUsers />}></Route>
        <Route path='/mytemplates' element={<TemplateList />}></Route>
        <Route path='/comments' element={<CommentList />}></Route>
        <Route path='/results' element={<ResultList />}></Route>
      </Routes>
    </div>
  )
}

export default App
