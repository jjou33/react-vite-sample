import { useState } from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

const DiaryEditorStyle = styled.div({
  border: '1px solid gray',
  textAlign: 'center',
  padding: '20px'
})

const textContents = css({
  marginBottom: '20px',
  width: '500px',
  padding: '10px'
})

const selectBoxStyle = css({
  width: '300px',
  padding: '10px',
  marginBottom: '20px'
})

const buttonStyle = css({
  width: '500px',
  padding: '10px',
  cursor: 'pointer'
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
    <div css={DiaryEditorStyle}>
      <h2>Diary Example</h2>
      <div>
        <input css={textContents} name="author" value={state.author} onChange={handleChangeState} />
      </div>
      <div>
        <textarea
          css={textContents}
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <select css={selectBoxStyle} name="emotion" onChange={handleChangeState}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button css={buttonStyle} onClick={handleSubmit}>
          일기 저장하기
        </button>
      </div>
    </div>
  )
}

export default DiaryEditor
