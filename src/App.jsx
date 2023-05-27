
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";

import './global.css'
import styles from './App.module.css';


const posts = [
  {
    id: '1',
    author: { 
      avatarUrl: 'https://github.com./NailsonCodens.png',
      name: 'Nailson Israel',
      role: 'Desenvolvedor Sênior Daju'
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-05-25 11:00:00')
  },
  {
    id: '2',
    author: { 
      avatarUrl: 'https://github.com./NailsonCodens.png',
      name: 'Carlos',
      role: 'Scrum Master'
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-05-23 11:00:00')
  }  
]

export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {
            posts.map((post) => {
              return (
                <Post 
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                  key={post.id}
                />
              );
            })
          }       
        </main>
      </div>
    </div>
  )
}
