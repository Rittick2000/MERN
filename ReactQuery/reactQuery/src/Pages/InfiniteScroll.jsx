import { useInfiniteQuery } from "@tanstack/react-query";

import { fetchUsers } from "../API/api";
import { useEffect } from "react";

function InfiniteScroll() {
  const { data, hasNextPage,fetchNextPage,isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 10 ? allPages + 1 : undefined;
    },
  });

  const handleScroll=()=>{
    const bottom=window.innerHeight+window.scrollY>=document.documentElement.scrollHeight -1;

    if(bottom && hasNextPage)
      fetchNextPage();
  }

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);
    return ()=>window.removeEventListener('scroll',handleScroll)
  },[hasNextPage])

  return (
    <div>
      <h1>Infinite Scroll with React Query v5</h1>

      {data?.pages?.map((page,index)=>(
        <ul key={index}>
          {page.map((user)=>(
            <li key={user.id}>
              <p>{user.login}</p>
              <img src={user.avatar_url} alt={user.login} width={50} height={50}/>
            </li>
          ))
          }
        </ul>
      ))

      }

      {isFetchingNextPage && <div>Loading More...</div>}
    </div>
  );
}

export default InfiniteScroll;
