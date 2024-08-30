import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar(){
	return (
		<aside className={styles.sidebar}>
			<img className={styles.cover} 
				 src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D" />
			<div className={styles.profile}>
				<img className={styles.avatar} src="https://github.com/BrunoCastroTomaz.png"/>
				<strong>Bruno Castro</strong>
				<span>Full Stack Developer</span>
			</div>
			<footer>
				<a href="#">
					<PencilLine size={20}/>
					Editar Seu perfil
				</a>
			</footer>
		</aside>
	);
}