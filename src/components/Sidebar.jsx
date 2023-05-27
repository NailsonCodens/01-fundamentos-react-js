import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react';

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1682687982502-1529b3b33f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40"
      />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/NailsonCodens.png"/>
        <strong>Nailson Israel</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar o seu perfíl
        </a>
      </footer>
    </aside>
  )
}