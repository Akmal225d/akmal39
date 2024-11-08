import React from 'react'
import './Header.scss'
import Card from '../Card/Card'
import Title from '../Title/Title'
const Header = () => {
  return (
 <>
<Title>Траспорт</Title>
 
 <div className="wrap">
  <Card title="Велисопед" photo="card-1.jpg" price="200$" />
  <Card title="Самокат" photo="card-2.jpg" price="350$" />
  <Card  title="Мотоцикл" photo="card-3.jpg" price="500$" />
  <Card />

 </div>
 
 
 </>
  )
}

export default Header
