import { FaPhoneAlt } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import css from './Contact.module.css'


export default function Contact ({contact:{ id, name, number}, onDelete}){
    return (
        <div className={css.contactContainer}>
          <div className={css.contactInfo}>
         
          <p className={css.person}><IoPerson />   {name}</p>
          <p className={css.person}><FaPhoneAlt />   {number}</p>
          </div>        

             <button className={css.button} type='button' onClick={() => onDelete(id)}>
        Delete
      </button>

        </div>
    )
}