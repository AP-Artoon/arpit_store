import React from 'react'
import Header from './Header'

const Home = () => {



    let current_user = JSON.parse(localStorage.getItem('current-user-data'))
    console.log('current_user', current_user);
    return (
        <>

            <Header />
            <h1 style={{
                height: '500px',
                paddingTop: '200px',
                textAlign: 'center',
            }} >Hello '{current_user.name}'<br/> <br /> welcome to My 'e Commeres' website your Email id <br/><br/> '{  current_user.email}'</h1>

        </>
    )
}

export default Home