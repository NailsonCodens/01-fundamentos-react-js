import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { useState } from 'react';
import { Avatar } from './Avatar';

export function Comment({content, onDeleteComment}){
  
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(){
    onDeleteComment(content);
  }

  function handleLikeComment(){
    setLikeCount(likeCount + 1);

    /*
      setLikeCount((state) => {
        return state + 1
      })
    */
  }

  return (
    <div className={styles.comment}>
      <Avatar
        src="https://github.com/NailsonCodens.png"
        alt=""
        hasBorder={false}
      /> 
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Nailson Israel</strong>
              <time title="Onze de Maio às 08:00:00" dateTime="2022-05-11 08:00:00">
                Cerda de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20}/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}