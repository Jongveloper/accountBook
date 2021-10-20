import React, { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TagListStyle } from './style';

//redux
import { getTagDB } from '../../redux/modules/TagModule/tag';


const TagList = () => {
  const dispatch = useDispatch();
  const tagState = useSelector((state) => state.tag.tag)
  const userState = useSelector((state) => state.user.user_info.username)
  useEffect(() => {
    dispatch(getTagDB(userState))
  }, [])

  return (
    <TagListStyle>
      {tagState.map((comment: any, idx: number) => {
        return <li
          style={{
            minHeight: '20px',
            fontWeight: 900,
            color: comment.color
          }}
          key={idx}>{comment.tagName}</li>
      })}
    </TagListStyle>
  )
}

export default TagList