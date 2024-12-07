import React, { useEffect, useState } from 'react'
import classes from './Home.module.scss'
import ex from '../../assets/dish.jpeg'
import Modal from '../../components/ui/Modal'
import { FaLeaf, FaPepperHot } from 'react-icons/fa6'
import { getCategories, getMainData } from '../../store/slices/mainReducer'
import { useDispatch } from 'react-redux'
import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../utils/translations'

const Home = () => {
  const {language} = useLanguage()
  const [showModal, setShowModal] = useState(false)
  const [categories, setCategories] = useState([])
  const [active, setActive] = useState(null)
  const dispatch = useDispatch()
  const [mainData, setMainData] = useState(null)
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
    dispatch(getCategories()).then((res) => {
      setCategories(res?.payload?.results)
      setActive(res?.payload?.results[0]?.id)
    })
    dispatch(getMainData()).then((res) => {
      setMainData(res.payload?.results[0]);
    })
  }, [])
  

  useEffect(() => {
    if(showModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [showModal])
  
  return (
    <section className={classes.container}>
        <Modal item={data} mainData={mainData} showModal={showModal} setShowModal={setShowModal} />
        {/* <Link to={'#'} style={{backgroundColor:'#7FB23C'}}  className={classes.orderNow}>Order Now <FaBasketShopping /></Link> */}
        <div className={classes.categories}>
            {categories?.map((item, index) => (
              <div className={classes.item} onClick={() => scrollTo(item?.id)} key={index}>
                <img src={item?.image ? item?.image : 'https://via.placeholder.com/150'} alt={index} />
                <p>{item?.[`name_${language}`]}</p>
              </div>
            ))}
        </div>
        {categories?.map((item, index) => (
          <div className={classes.itemsContainer} id={item?.id}>
              <h3>{item?.[`name_${language}`]}</h3>
              <div className={classes.items}>
                {item?.products?.map((item, index) => (
                <div className={classes.item} onClick={() => handleModal(item)}
                  key={item?.id}>
                  <img src={item?.image ? item?.image : 'https://via.placeholder.com/150'} alt={index} />
                  <h4>{item?.[`name_${language}`]}</h4>
                  <p>{item?.[`description_${language}`] && item?.[`description_${language}`]?.slice(0, 100)} {item?.[`description_${language}`]?.length > 100 && '...'}</p>
                  <div className={classes.icons}>
                  {item?.types && item?.types?.map((type, index) => (
                    <span title={type?.[`name_${language}`]}>{type?.icon}</span>
                  ))}
                  {/* <span title='يقدم مع البطاطا المقلية'>&#127839;</span>
                  <span title='يحتوي علي الجبن'>&#129472;</span>
                  <span title='حار جدا'>&#128293;</span>
                  <span title='نباتي'><FaLeaf style={{color:'green'}} /></span>
                  <span title='مناسب للاطفال'>👦🏻</span> */}
                  </div>
                  <p style={{marginTop:'auto'}}>{translate('price',language)} : <span style={{color:mainData?.primary_color ? mainData?.primary_color : '#7FB23C'}}>{item?.price}₪</span></p>
                 
                </div>
              ))}
              </div>
        </div>
        ))}
       
       
    </section>
  )
}

export default Home