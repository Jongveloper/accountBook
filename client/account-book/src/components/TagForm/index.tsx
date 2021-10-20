import React, { useState } from 'react';
import { Button, Input } from '../../elements';
import { TagFormStyle } from './style';
import { css } from 'styled-components';
import { addTagDB } from '../../redux/modules/TagModule/tag';
import { useDispatch } from 'react-redux';
const TagForm = () => {
  const dispatch = useDispatch();
  const randomColor = ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600']
  let [tag, setTag] = useState({
    tagName: '',
    color: ''
  });
  const $tag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTag({
      tagName: e.target.value,
      color: randomColor[Math.floor(Math.random() * 5)]
    })
  }
  const handleAddTag = () => {
    dispatch(addTagDB(tag))
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
        addstyle={() => {
          return css`
          max-width: 300px;
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