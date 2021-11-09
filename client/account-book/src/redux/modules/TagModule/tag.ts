import { createSlice } from '@reduxjs/toolkit';
import apis, { instance } from '../../../shared/api';
import { getToken } from '../../../shared/token';
import type { RootState } from '../../configureStore';

const initialState = {
  tag: [{ tagName: '', color: '', id: 0 }],
};

export const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {
    addTag: (state, action) => {
      const tagName = action.payload.tagName;
      const color = action.payload.color;
      const id = action.payload.id;
      state.tag.push({ tagName, color, id });
    },
    deleteTag: (state, action) => {
      let idx = state.tag.findIndex((r) => r.id === action.payload);
      if (idx !== -1) {
        state.tag.splice(idx, 1);
      }
    },
    getTag: (state, action) => {
      state.tag = action.payload;
    },
  },
});

export const addTagDB = (tag: any) => {
  let token = getToken();
  return function (dispatch: any) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    apis
      .CreateTag(tag)
      .then((res: any) => {
        dispatch(addTag({ tagName: res.data[0].tagName, id: res.data[0].id }));
      })
      .catch((err) => {
        window.alert(
          '태그 작성에 오류가 생겼어요! 잠시후 다시 시도 부탁드립니다.'
        );
      });
  };
};

export const getTagDB = (username: string) => {
  let token = getToken();
  return function (dispatch: any) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    apis
      .GetTag(username)
      .then((res) => {
        let tag = res.data;
        dispatch(getTag(tag));
      })
      .catch((err) => {
        window.alert('오류가 생겼어요! 잠시후 다시 시도 부탁드립니다.');
      });
  };
};

export const deleteTagDB = (id: number) => {
  return function (dispatch: any) {
    apis
      .DeleteTag(id)
      .then((res) => {
        dispatch(deleteTag(id));
      })
      .catch((err) => {
        window.alert(
          '태그 삭제에 오류가 생겼어요! 잠시후 다시 시도 부탁드립니다.'
        );
      });
  };
};
export const { addTag, getTag, deleteTag } = tagSlice.actions;
export const selectTag = (state: RootState) => state.tag;
export default tagSlice.reducer;
