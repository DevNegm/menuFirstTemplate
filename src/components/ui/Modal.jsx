import React, { useState } from 'react'
import classes from './Modal.module.scss'
import ex from '../../assets/dish.jpeg'
import { MdClose } from 'react-icons/md'
import { IoIosArrowDown } from 'react-icons/io'

const Modal = ({data, showModal,setShowModal}) => {
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
                    <button style={{backgroundColor:'#7FB23C'}} className={classes.close} onClick={() => setShowModal(false)}><MdClose /></button>
                    <img src={ex} alt="example" />
                    <div className={classes.modalText}>
                    <h4>اسم الوجبه</h4>
                  <p>بيتزا مارغريتا بجبنة الموتزريلا والطماطم</p>
                  <p>السعر: <span style={{color:'#7FB23C'}}>75.00₪</span></p>
                    <div className={classes.extras} >
                        <button onClick={() => setOpenExtra(!openExtra)}>الاضافات <IoIosArrowDown style={{transform:openExtra && 'rotate(180deg)',transition:'all 250ms ease-in-out'}} /></button>
                        { openExtra && <div className={classes.extrasContent}>
                        {Array(9).fill().map((_, index) => (
                            <div className={classes.item} key={index}>
                                <p>اسم الاضافة</p>
                                <p>السعر: <span style={{color:'#7FB23C'}}>2.00₪</span></p>
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