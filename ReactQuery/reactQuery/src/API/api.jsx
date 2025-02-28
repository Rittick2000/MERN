import axios from "axios";

const api=axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchPosts=()=>{
    return api.get("/posts");
};

export const fetchIndvPost=(id)=>{
    return api.get(`/posts/${id}`);
}

export const deletePost=(id)=>{
    return api.delete(`/posts/${id}`);
}

export const fetchUsers=async({pageParam=1})=>{
    try{
        const res=await axios.get(`https://api.github.com/users?per_page=10&page=${pageParam}`);
        return res.data;
    }catch(error){
        console.log(error);
    }
}