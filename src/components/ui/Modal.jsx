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
                    <h3>Item Name</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ipsam. Voluptas reprehenderit veritatis magnam nulla odit, fugiat sint recusandae ab quam? Quam voluptate magni esse.</p>
                    <div className={classes.extras} >
                        <button onClick={() => setOpenExtra(!openExtra)}>Extras <IoIosArrowDown style={{transform:openExtra && 'rotate(180deg)',transition:'all 250ms ease-in-out'}} /></button>
                        { openExtra && <div className={classes.extrasContent}>
                        {Array(9).fill().map((_, index) => (
                            <div className={classes.item} key={index}>
                                <p>Extra Name</p>
                                <p>Price: <span style={{color:'#7FB23C'}}>2.00$</span></p>
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