import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { fetchPosts } from '../API/api';
import { NavLink } from 'react-router-dom';

function FetchRQ() {

  const getPostsData=async ()=>{
    const res=await fetchPosts();
    return res.data;
  }

  const {data,isLoading,isError,error}=useQuery({
    queryKey: ["posts"],
    queryFn: getPostsData,
    gcTime: 5000, // will stay in catch for 5s
    //staleTime: 10000, // no call to server till 10s
    //refetchInterval: 10, //refetch after every 10s (ideally we should keep staleTime or refetch open not both)
    //refetchIntervalInBackground: true, // continue refetch in background if user is not on that page
  });

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>{error}</div>

  return (
    <div>
      <ul>
       { data?.map((currData)=>{
        const {id,title,body}=currData;
        return(
          <li key={id}>
            <NavLink to={`/rq/${id}`}>
            <p>{title}</p>
            <p>{body}</p>
            </NavLink>
          </li>
        )
        })}
      </ul>

    </div>
  )
}

export default FetchRQ