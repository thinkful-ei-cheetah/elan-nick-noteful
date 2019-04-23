import React from 'react'

export default function SideBar(props) {
  const folders = props.folders.map( (folder, i) => {
    return (
      <li key={folder.id}> 
        Folder{ i+1 }
      </li>
    )
  });

  return (
    
    <section className="side-bar">
      <ul>
        {folders}
      </ul>
    </section>
  )
}
