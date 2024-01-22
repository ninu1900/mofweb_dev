import { 
  Homepage,
  LawOSGAM,
  BlogContentPage,
  LawEL,
  LawOCS,
  Decree,
  Ordinance,
  Agreement,
  Instruction,
  Announcement,
  FinanceNews,
  Television,
  Publication,
  Roles,
  Organization,
  Contact,

} from "./pages";
import {Routes, Route} from 'react-router-dom';
import useFetch from './hooks/useFetch'



import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss?v=1.5.0";
import "./assets/demo/demo.css?v=1.5.0";
import "./assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

import './i18n';




export default function App() {
  

  let {loading, data, error} =useFetch('http://172.16.0.163:1337/api/blogs?populate=*&sort=id:desc')
  if(loading) return <span className="loading loading-ring loading-lg"></span>
  if(error) return <p>Error!</p>


  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<Homepage />}></Route> */}

        <Route path='/' element={<Homepage blogs={data?data:""} />}></Route>
        
        {/* Law & Legislation Menu */}
        <Route path='/law-on-state-governor-and-manage' element={<LawOSGAM />}></Route>
        <Route path='/economic-law' element={<LawEL />}></Route>
        <Route path='/laws-on-culture-socials' element={<LawOCS />}></Route>

        <Route path='/decree' element={<Decree />}></Route>
        <Route path='/ordinance' element={<Ordinance />}></Route>
        <Route path='/agreement' element={<Agreement />}></Route>
        <Route path='/instruction' element={<Instruction />}></Route>
        <Route path='/announcement-and-instruction' element={<Announcement />}></Route>

        {/* Event Menu */}
        <Route path='/finance-news' element={<FinanceNews />}></Route>
        <Route path='/television' element={<Television />}></Route>

        {/* Publication and Statistic Menu */}
        <Route path='/publication-and-statistics' element={<Publication />}></Route>

        {/* About MOF */}
        <Route path='/roles-and-responsibilities' element={<Roles />}></Route>
        <Route path='/organization-and-structure' element={<Organization />}></Route>
        <Route path='/contact' element={<Contact />}></Route>

        <Route path='/blog/:id' element={<BlogContentPage  blogs={data?data:""}/>}></Route>
      </Routes>
    </div>
  
  )
}


