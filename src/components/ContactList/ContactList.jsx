import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList({contacts, onDelete}){
    return(    
    <ul className={css.list}>
        {contacts.map((contact)=>{
                return<li key={contact.id}>

                <Contact contact={contact} onDelete={onDelete}/>
                    </li>
            })}	
    </ul>
    )}
