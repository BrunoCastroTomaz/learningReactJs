// JSX = JavaScript + XML

import { Post } from './Post';

export function App() {
  return (
    <div>
      <Post 
        author="Bruno Castro"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />   
      <Post 
        author="Bruno Tomaz"
        content="Outro Post: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
    </div>
   )
}

