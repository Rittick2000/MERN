import React, { useState } from "react";
import { deletePost, fetchIndvPost } from "../../API/api";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function FetchIndv() {
  const { id } = useParams();
  const [pageNumebr, setPagenumber] = useState(id);

  const getIndvPostsData = async (pageNumebr) => {
    const res = await fetchIndvPost(pageNumebr);
    return res.data;
  };

  const queryClient=useQueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", pageNumebr],
    queryFn: () => getIndvPostsData(pageNumebr),
  });
  
  const deleteMutation=useMutation({
    mutationFn: (pageNumebr)=>deletePost(pageNumebr),
    onSuccess:(data,id)=>{
      queryClient.setQueriesData(["posts",pageNumebr],(currentElement)=>{
        return {};
      })
    }
  })

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error}</div>;

  const { title, body } = data;
  return (
    <div>
      <p>{title}</p>
      <p>{body}</p>
      <div>
        <button onClick={() => pageNumebr>1 ? setPagenumber(pageNumebr - 1) : undefined}>Prev</button>
        <p>{pageNumebr}</p>
        <button onClick={() => setPagenumber(Number(pageNumebr) + 1)}>Next</button>
        <button onClick={()=>deleteMutation.mutate(pageNumebr)}>Delete</button>
      </div>
    </div>
  );
}

export default FetchIndv;
