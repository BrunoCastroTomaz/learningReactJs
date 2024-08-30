// JSX = JavaScript + XML

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './Post';

import styles from './App.module.css';
import './global.css';


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post 
            author="Bruno Castro"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />   
          <Post 
            author="Bruno Tomaz"
            content="Outro Post: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
        </main>
      </div>
    </div>
   )
}

