import React, { useState } from 'react';
// element
import { Button, Input } from '../../elements';
// style
import { TagFormStyle } from './style';
import { css } from 'styled-components';
// redux
import { useDispatch } from 'react-redux';
import { addTagDB } from '../../redux/modules/TagModule/tag';

const TagForm = (): React.ReactElement => {
  const dispatch = useDispatch();
  let [tag, setTag] = useState({
    tagName: '',
  });
  const $tag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTag({
      tagName: e.target.value
    })
  }
  const handleAddTag = () => {
    if (tag.tagName === '') {
      alert('태그를 입력해주세요!')
      return
    }
    dispatch(addTagDB(tag))
    setTag({ tagName: '' })
  }
  return (
    <TagFormStyle>
      <label style={{ fontWeight: 800, color: '#B6C8A5', marginLeft: '5px' }}>태그</label>
      <Input
        width='70%'
        height='40px'
        margin='0 5px 20px 5px'
        border='5px solid #B6C8A5'
        placeholder='추가 할 태그를 입력해주세요'
        value={tag.tagName}
        addstyle={() => {
          return css`
          z-index: 4;
          `
        }}
        _onChange={$tag} />
      <Button
        border='none'
        width='50px'
        height='40px'
        color='white'
        _onClick={() => handleAddTag()}>작성</Button>
    </TagFormStyle>
  )
}

export default TagForm;