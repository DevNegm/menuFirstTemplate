import React, { useState } from 'react'
import classes from './Modal.module.scss'
import ex from '../../assets/dish.jpeg'
import { MdClose } from 'react-icons/md'
import { IoIosArrowDown } from 'react-icons/io'
import { useLanguage } from '../../context/LanguageContext'
import { translate } from '../../utils/translations'

const Modal = ({item, showModal,setShowModal,mainData}) => {
    const {language} = useLanguage()
    const [openExtra, setOpenExtra] = useState(false)
     const handleClose = (e) => {
        if (e.target.classList.contains(classes.modal)) {
            setShowModal(false);
            setOpenExtra(false);
        }
    };
    if(showModal) {
        return (
            <div className={classes.modal} onClick={handleClose}>
                <div className={classes.modalContent}>
                    <button style={{backgroundColor:mainData?.primary_color ? mainData?.primary_color : '#7FB23C'}} className={classes.close} onClick={() => setShowModal(false)}><MdClose /></button>
                    <img src={item?.image ? item?.image : 'https://via.placeholder.com/150'} alt="example" />
                    <div className={classes.modalText}>
                    <div style={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
                    <h4>{item?.[`name_${language}`]}</h4>
                    <div className={classes.tags}>
                        {item?.types && item?.types?.map((item, i) => (
                            <div key={i} className={classes.tag}>
                                <span title={item?.[`name_${language}`]}>{item?.[`name_${language}`]}</span>
                            </div>
                        ))}
                    </div>
                    </div>
                    
                  <p>{item?.[`description_${language}`]}</p>
                  <p>{translate('price',language)} : <span style={{color:mainData?.primary_color ? mainData?.primary_color : '#7FB23C'}}>{item?.price}₪</span></p>
                    <div className={classes.extras} >
                        <button onClick={() => setOpenExtra(!openExtra)}>{translate('extras',language)} <IoIosArrowDown style={{transform:openExtra && 'rotate(180deg)',transition:'all 250ms ease-in-out'}} /></button>
                        { openExtra && <div className={classes.extrasContent}>
                        {item?.variants?.map((item, index) => (
                            <div className={classes.item} key={index}>
                                <p>{item?.[`name_${language}`]}</p>
                                <p>{translate('price',language)} : <span style={{color:mainData?.primary_color ? mainData?.primary_color : '#7FB23C'}}>{item?.price}₪</span></p>
                            </div>
                        ))}
                        </div>}
                    </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Modal