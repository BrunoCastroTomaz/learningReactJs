import styles from './Post.module.css';

export function Post(){
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<img className={styles.avatar} src="https://github.com/BrunoCastroTomaz.png" />
					<div className={styles.authorInfo}>
						<strong>Bruno Castro</strong>
						<span>Full Stack Developer</span>
					</div>
				</div>

				<time title="29 de Agosto às 08h13" dateTime="2024-08-29 08:13:38">Publicado há 1h</time>
			</header>

			<div className={styles.content}>
				<p>Fala galeraa 👋</p>

				<p>Acabei de subir mais um projeto no meu portifolio. É um projeto chamado Social Bruno, uma página estática feita em React !!</p>
				<p>👉 <a href="https://www.linkedin.com/in/bruno-castro-tomaz-5b2139249/">in/bruno-castro-tomaz-5b2139249</a></p>
			</div>
		</article>
	)
}