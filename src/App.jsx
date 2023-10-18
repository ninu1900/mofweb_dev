import { Homepage, BlogContentPage } from "./pages";
import {Routes, Route} from 'react-router-dom';
import useFetch from './hooks/useFetch'



import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss?v=1.5.0";
import "./assets/demo/demo.css?v=1.5.0";
import "./assets/demo/nucleo-icons-page-styles.css?v=1.5.0";



export default function App() {
  

  let {loading, data, error} =useFetch('http://localhost:1337/api/blogs?populate=*')
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error!</p>


  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage blogs={data?data:""} />}></Route>
        <Route path='/blog/:id' element={<BlogContentPage  blogs={data?data:""}/>}></Route>
      </Routes>
    </div>
  
  )
}


