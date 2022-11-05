import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk(
  "get-user-date/using-id",
  async (id) => {
    return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
      (res) => res.json()
    );
  }
);

export const updatePost = createAsyncThunk(
  "update-user-date/using-id",
  async ({id,data}) => {
    return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
      method: 'PATCH',
      body: JSON.stringify(data),
    }).then(
      (res) => res.json()
    );
  }
);


export const deletePost = createAsyncThunk(
  "delete-user-date/using-id",
  async (id) => {
    return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
      method: 'DELETE',
    }).then(
      (res) => res.json()
    );
  }
);


const postSlice = createSlice({
    name: 'post',
    initialState:{
        post:{},
        loading:false,
        error:""
    },
    extraReducers:  {
      [getPost.pending]:(state,action)=>{
        state.loading=true;
      },
      [getPost.fulfilled]:(state,action)=>{
        state.loading=false;
        state.post=action.payload;
      },
      [getPost.rejected]:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
      },
      [updatePost.pending]:(state,action)=>{
        state.loading=true;
      },
      [updatePost.fulfilled]:(state,action)=>{
        state.loading=false;
        state.post=action.payload;
      },
      [updatePost.rejected]:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
      },
      [deletePost.pending]:(state,action)=>{
        state.loading=true;
      },
      [deletePost.fulfilled]:(state,action)=>{
        state.loading=false;
        state.post={};
      },
      [deletePost.rejected]:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
      }
    },
  })


  export default postSlice.reducer;



