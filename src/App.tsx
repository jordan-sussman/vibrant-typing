import { Fragment, useState } from 'react'
import './App.css'

function App() {
  const [content, setContent] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value)
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
    document.body.style.backgroundColor = randomColor
  }

  return (
    <Fragment>
      <input
        autoFocus
        value={content}
        onChange={handleInputChange}
        placeholder='Type something here...'
        style={{
          border: 'none',
          borderRadius: 4,
          fontSize: 14,
          paddingInlineStart: 4,
          height: 24,
        }}
        type='text'
      />
    </Fragment>
  )
}

export default App
