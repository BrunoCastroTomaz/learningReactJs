import { Trash } from 'phosphor-react'
import { ThumbsUp } from 'phosphor-react'

import styles from './Comment.module.css';

export function Comment(){
	return (
		<div className={styles.comment}>
			<img src="https://github.com/BrunoCastroTomaz.png" alt="" />
			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Bruno Tomaz</strong>
							<time title="29 de Agosto às 08h13" dateTime="2024-08-29 08:13:38">Cerca de 1h atrás</time>
						</div>
						<button title="Deletar Comentario">
							<Trash size={20} />
						</button>
						</header>
						<p>Muito bom Bruno, parabéns!!</p>
					</div>
					<footer>
						<button>
							<ThumbsUp />
							Aplaudir <span>20</span>
						</button>
					</footer>
			</div>
		</div>
	)
}