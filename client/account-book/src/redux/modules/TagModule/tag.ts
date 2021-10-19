import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import apis, { instance } from '../../../shared/api';
import { getToken } from '../../../shared/token';
import axios from 'axios';
const token = getToken();

const initialState = {
  tag: ['', ''],
};

export const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {
    addTag: (state, action) => {
      const tag = action.payload.tag;
      const color = action.payload.color;
      state.tag.push(tag, color);
    },
    deleteTag: (state, action: PayloadAction<number>) => {
      console.log('삭제');
    },
    getTag: (state, action) => {
      state.tag = action.payload;
    },
  },
});

export const addTagDB = (tag: any) => {
  return function (dispatch: any) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    console.log(instance.defaults.headers.common['Authorization']);
    apis
      .CreateTag(tag)
      .then((res) => {
        dispatch(addTag);
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const getTagDB = (username: string) => {
  return function (dispatch: any) {
    instance.defaults.headers.common['Authorization'] = `${token}`;
    apis
      .GetTag(username)
      .then((res) => {
        dispatch(getTag);
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const deleteTagDB = (id: number) => {
  return function (dispatch: any) {
    apis
      .DeleteTag(id)
      .then((res) => {
        dispatch(deleteTag);
      })
      .catch((err) => {
        console.error(err);
      });
  };
};
export const { addTag, getTag, deleteTag } = tagSlice.actions;
