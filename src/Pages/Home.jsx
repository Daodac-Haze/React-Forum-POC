import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from 'react';

export default function Home() {

  
    
    const [post, setPost] = useState([]);

    useEffect(()=> {
        posts()
    }, [])

    const posts = async () => {

       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
       setPost(await response.json());
    }

    return (
      <Main>
        <PageTitle>React Forum POC</PageTitle>
        {post.map((data) =>{
            return(
        <PostLink href={"/post/" + data.id} key={data.id}><PostContainer><PostTitle>{data.title}</PostTitle></PostContainer></PostLink>
            )   
        })}
      </Main>
    );
  }

 const Main = styled.main`
 padding: "1rem 0";
 `;

  const PostContainer = styled.div`
  background-color: #f6f6f6;
  border-radius: 2px;
  padding: 12px 25px 12px;
  margin: 15px;
  box-shadow: 4px 4px #dadada;
  `;

const PostLink = styled.a`
  text-decoration: none;
`;
  const PostTitle = styled.h1`
    color: black;
    text-decoration: none;
  `;

  const PageTitle = styled.h1`
    text-align: center;
  `;