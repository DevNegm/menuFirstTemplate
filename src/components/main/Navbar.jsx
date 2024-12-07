import React, { useEffect, useState } from 'react'
import classes from './Navbar.module.scss'
import b1 from '../../assets/images.jpeg'
import b2 from '../../assets/b2.jpg'
import b3 from '../../assets/b3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FormControl, MenuItem, Select } from '@mui/material'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaGlobe, FaInstagram, FaPhone, FaPinterest, FaTiktok, FaYoutube } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { IoTimeOutline } from 'react-icons/io5'
import { getMainData } from '../../store/slices/mainReducer'
import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../utils/translations'

const Navbar = () => {
  const { mainDataLoading } = useSelector((state) => state.main);
  const [data, setData] = useState([b1, b2, b3])
  const {language,changeLanguage} = useLanguage()
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()
  const handleClose = (e) => {
    if (e.target.classList.contains(classes.modal)) {
        setShowModal(false);
        setOpenExtra(false);
    }
};


useEffect(() => {
  dispatch(getMainData()).then((res) => {
    setData(res.payload?.results[0]);
  })
}, [])

  return (
    <section className={classes.header}>
      {
        showModal && <div className={classes.modal} onClick={handleClose}>
          <div className={classes.modalContent} style={{backgroundColor:data?.primary_color ? data?.primary_color : '#7FB23C'}}>
            <button className={classes.close} onClick={() => setShowModal(false)}><MdClose /></button>
              <p>
                {translate("friday", language)} {' '}
                {data?.opening_time} - {data?.closing_time}
                <IoTimeOutline />
              </p>
              <p>
              {translate("saturday", language)} {' '}
                {data?.opening_time} - {data?.closing_time}
                <IoTimeOutline />
              </p>
              <p>
              {translate("sunday", language)} {' '}
                {data?.opening_time} - {data?.closing_time} <IoTimeOutline />{" "}
              </p>
              <p>
              {translate("monday", language)} {' '}
                {data?.opening_time} - {data?.closing_time} <IoTimeOutline />{" "}
              </p>
              <p>
              {translate("tuesday", language)} {' '}
                {data?.opening_time} - {data?.closing_time} <IoTimeOutline />{" "}
              </p>
              <p>
              {translate("wednesday", language)} {' '}
                {data?.opening_time} - {data?.closing_time} <IoTimeOutline />{" "}
              </p>
              <p>
              {translate("thursday", language)} {' '}
                {data?.opening_time} - {data?.closing_time} <IoTimeOutline />{" "}
              </p>
          </div>
        </div>
      }
    <div className={classes.language}>
    <FormControl sx={{minWidth:110}}>
        <Select
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
          inputProps={{ 'aria-label': 'Without label' }}
          size='small'
          className='select'
        >
          <MenuItem value={'ar'}>العربية</MenuItem>
          <MenuItem value={'he'}>עברית</MenuItem>
        </Select>
      </FormControl>
    </div>
      <div className={classes.headerPhoto}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Autoplay]}
        loop={true}
        direction={'vertical'}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false
        }}
      >
      {data?.header_images?.map((item, index) =>
      <SwiperSlide><img className={classes.image} src={item?.image} alt={index} /></SwiperSlide>
      )}
    </Swiper>
      </div>
      <div className={classes.headerText}>
        <img src={data?.image ? data?.image : "https://via.placeholder.com/150"} style={{border:`5px solid ${data?.primary_color ? data?.primary_color : "#7FB23C"}`}} alt="logo" />
        <h3>{data?.[`name_${language}`]}</h3>
        <button className={classes.workinghours} onClick={() => {setShowModal(!showModal)}} style={{backgroundColor:data?.primary_color ? data?.primary_color : '#7FB23C'}}>
          {data?.opening_time} - {data?.closing_time} <IoTimeOutline />
        </button>
        <div className={classes.social}>
          {data?.social_media_links?.map((item) => (
              <Link to={item?.url} key={item?.id} 
                onMouseEnter={(e) => (e.target.style.color = data?.primary_color ? data?.primary_color : "#B57EDC")}
                onMouseLeave={(e) => (e.target.style.color = "#fff")}
                target='_blank'>
                {item?.platform == 'facebook' && <FaFacebookF />}
                {item?.platform == 'youtube' && <FaYoutube />}
                {item?.platform == 'tiktok' && <FaTiktok />}
                {item?.platform == 'pinterest' && <FaPinterest />}
                {item?.platform == 'instagram' && <FaInstagram />}
                {!item?.platform  && <FaGlobe />}
              </Link>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Navbar