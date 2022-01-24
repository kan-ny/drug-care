import { useState, useEffect } from 'react';
import './App.css';
import DrugCare from './comp/drugcare';
import AboutUs from './comp/aboutus';
import { Container } from '@mui/material';
import FormData from './comp/formdata';
import firebaseConfig from './config';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get,  } from "firebase/database";



function App() {

  const [formpage, setFormPage] = useState(false);
  const formPagefun = () => {
    setFormPage(!formpage)
    // console.log('..', formpage);
  }

  const app = initializeApp(firebaseConfig);

  const database = getDatabase(app);

  const [userlist, setUserlist] = useState([])

  useEffect(() => {
    // const app = firebase.initializeApp(firebaseConfig);

    const dbRef = ref(getDatabase());

    get(child(dbRef, `users/`)).then((snapshot) => {
      if (snapshot.exists()) {
        // setUserlist(snapshot.val())
        let userlist_ = []
        for (var key in snapshot.val()) {
             userlist_.push( {'name': snapshot.val()[key]['name'], 'email_id': snapshot.val()[key]['email_id'], 'phone': snapshot.val()[key]['phone'] } )              
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
    // <div className="App">

    <Container maxWidth="lg">

      <DrugCare></DrugCare>


      {formpage === false && (<div className='maindiv' > <AboutUs userlist={userlist} toggle_={formPagefun} ></AboutUs>  </div>)}
      {formpage === true && (<FormData database={database} toggle_={formPagefun} ></FormData>)}



    </Container>

  );
}

export default App;
