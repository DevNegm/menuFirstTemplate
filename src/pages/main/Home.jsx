import React, { useEffect, useState } from 'react'
import classes from './Home.module.scss'
import ex from '../../assets/dish.jpeg'
import Modal from '../../components/ui/Modal'
import { FaBaby, FaBasketShopping, FaFire, FaLeaf, FaPepperHot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { GiFrenchFries } from 'react-icons/gi'
import { BiCheese } from 'react-icons/bi'
const Home = () => {
  const [showModal, setShowModal] = useState(false)
  const scrollTo = (id) => {
    const element = document.getElementById(id)
    element.scrollIntoView({ behavior: 'smooth' })
  }
  const [data, setData] = useState(null)
  const handleModal = (data) => {
    setShowModal(true)
    setData(data)
  }

  

  useEffect(() => {
    if(showModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [showModal])
  
  return (
    <section className={classes.container}>
        <Modal data={data} showModal={showModal} setShowModal={setShowModal} />
        {/* <Link to={'#'} style={{backgroundColor:'#7FB23C'}}  className={classes.orderNow}>Order Now <FaBasketShopping /></Link> */}
        <div className={classes.categories}>
            {Array(25).fill().map((_, index) => (
              <div className={classes.item} onClick={() => scrollTo('hehe')} key={index}>
                <img src={ex} alt={index} />
                <p>{index === 2 ? 'لحوم' : index === 3 ? 'اسماك' : 'فراخ'}</p>
              </div>
            ))}
        </div>
        <div className={classes.itemsContainer} id='hehe'>
              <h3>اسم الصنف</h3>
              <div className={classes.items}>
                {Array(10).fill().map((_, index) => (
                <div className={classes.item} onClick={() => handleModal('test')} key={index}>
                  <img src={ex} alt={index} />
                  <h4>اسم الوجبه</h4>
                  <p>بيتزا مارغريتا بجبنة الموتزريلا والطماطم</p>
                  <div className={classes.icons}>
                  <span title='طعام حار'><FaPepperHot style={{color:'#B80E0B'}} /></span>
                  <span title='يقدم مع البطاطا المقلية'>&#127839;</span>
                  <span title='يحتوي علي الجبن'>&#129472;</span>
                  <span title='حار جدا'>&#128293;</span>
                  <span title='نباتي'><FaLeaf style={{color:'green'}} /></span>
                  <span title='مناسب للاطفال'>👦🏻</span>
                  </div>
                  <p>السعر: <span style={{color:'#7FB23C'}}>75.00₪</span></p>
                 
                </div>
              ))}
              </div>
        </div>
        <div className={classes.itemsContainer}>
              <h3>اسم الصنف</h3>
              <div className={classes.items}>
                {Array(5).fill().map((_, index) => (
                  <div className={classes.item} onClick={() => handleModal('test')} key={index}>
                  <img src={ex} alt={index} />
                  <h4>اسم الوجبه</h4>
                  <p>بيتزا مارغريتا بجبنة الموتزريلا والطماطم</p>
                  <div className={classes.icons}>
                  <span title='طعام حار'><FaPepperHot style={{color:'#B80E0B'}} /></span>
                  <span title='يقدم مع البطاطا المقلية'>&#127839;</span>
                  <span title='يحتوي علي الجبن'>&#129472;</span>
                  <span title='حار جدا'>&#128293;</span>
                  <span title='نباتي'><FaLeaf style={{color:'green'}} /></span>
                  <span title='مناسب للاطفال'>👦🏻</span>
                  </div>
                  <p>السعر: <span style={{color:'#7FB23C'}}>75.00₪</span></p>
                 
                </div>
              ))}
              </div>
        </div>
        <div className={classes.itemsContainer}>
              <h3>اسم الصنف</h3>
              <div className={classes.items}>
                {Array(8).fill().map((_, index) => (
                  <div className={classes.item} onClick={() => handleModal('test')} key={index}>
                  <img src={ex} alt={index} />
                  <h4>اسم الوجبه</h4>
                  <p>بيتزا مارغريتا بجبنة الموتزريلا والطماطم</p>
                  <div className={classes.icons}>
                  <span title='طعام حار'><FaPepperHot style={{color:'#B80E0B'}} /></span>
                  <span title='يقدم مع البطاطا المقلية'>&#127839;</span>
                  <span title='يحتوي علي الجبن'>&#129472;</span>
                  <span title='حار جدا'>&#128293;</span>
                  <span title='نباتي'><FaLeaf style={{color:'green'}} /></span>
                  <span title='مناسب للاطفال'>👦🏻</span>
                  </div>
                  <p>السعر: <span style={{color:'#7FB23C'}}>75.00₪</span></p>
                 
                </div>
              ))}
              </div>
        </div>
    </section>
  )
}

export default Home