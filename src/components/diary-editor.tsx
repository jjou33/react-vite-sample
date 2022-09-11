import { useState } from 'react'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const DiaryEditorStyle = css({
  border: '1x solid gray',
  textAlign: 'center',
  padding: '20px'
})
const DiaryEditor = () => {
  const [state, setState] = useState({
    author: '',
    content: '',
    emotion: 1
  })

  const handleChangeState = (e: any) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    console.log(state)
    alert('저장')
  }
  return (
    <div>
      <h2>Diary Example</h2>
      <div>
        <input
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <select name="emotion" onChange={handleChangeState}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  )
}

export default DiaryEditor
