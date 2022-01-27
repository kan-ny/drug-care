import { useState, useEffect } from 'react';
import './App.css';
import DrugCare from './comp/drugcare';
import AboutUs from './comp/aboutus';
import { Container } from '@mui/material';
import FormData from './comp/formdata';
import firebaseConfig from './config';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get, } from "firebase/database";

function App() {
  const [formpage, setFormPage] = useState(false);
  const formPagefun = () => {
    setFormPage(!formpage)
  }

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const [userlist, setUserlist] = useState([])

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/`)).then((snapshot) => {
      if (snapshot.exists()) {
        let userlist_ = []
        for (var key in snapshot.val()) {
          userlist_.push({ 'name': snapshot.val()[key]['name'], 'email_id': snapshot.val()[key]['email_id'], 'phone': snapshot.val()[key]['phone'] })
        }
        setUserlist(userlist_)
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  })

  return (
    <div  >

    
      <DrugCare style={{ maxWidth: "100%" }}></DrugCare>
      <Container maxWidth="md" >
      {formpage === false && (<div className='maindiv' > <AboutUs userlist={userlist} toggle_={formPagefun} ></AboutUs>  </div>)}
      {formpage === true && (<FormData database={database} toggle_={formPagefun} ></FormData>)}
      </Container>
    </div>
  );
}

export default App;
