import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components'
import { useParams } from "react-router-dom";


export default function Post() {


  
    const [post, setPost] = useState([]);
    const [post2, setPost2] = useState([]);

    useEffect(()=> {
        posts()
    }, [])
  
    useEffect(()=> {
      posts2()
  }, [])

  const posts2 = async () => {
    const response2 = await fetch('https://jsonplaceholder.typicode.com/posts');
    setPost2(await response2.json());
  }
    const posts = async () => {
       const response = await fetch('https://jsonplaceholder.typicode.com/comments');
       setPost(await response.json());
     
    }
    let params = useParams();

    return (
      
      <Main>
      {post2.filter(data => data.id == params.postId).map((content)  =>{
            return(
              <PostContainer key={content.id}>
       <BackButtonContainer><Link to="/home">Back</Link></BackButtonContainer>
        <PostTitle key={content.title}>{content.title}</PostTitle>
        <PostBody key={content.body}>{content.body}</PostBody>
        </PostContainer>
            )   
        })}
        {post.filter(data => data.postId == params.postId).map((content)  =>{
            return(
       <CommentContainer key={content.id}>
        <CommentName key={content.name}>{content.name}</CommentName>
        <CommentEmail key={content.email}>{content.email}</CommentEmail>
        <CommentBody key={content.body}>{content.body}</CommentBody>
        </CommentContainer>
            )   
        })}
      </Main>
    );



    
   
  }

const BackButtonContainer = styled.div`
  a{
    text-decoration: none;
    padding: 5px;
    border-radius: 2px;
    background-color: whitesmoke;
    color: #3A3845;
    font-weight: 800;
  }
`;


const Main = styled.main`
padding: "1rem 0";
`;

 const CommentName = styled.h4`
   margin-bottom: 0px;
 `;

 const CommentEmail = styled.p`
 margin-top: 5px;
 border-bottom: 1px solid black;
 padding-bottom: 20px;
 `;

const CommentBody = styled.h3`
  margin-top: 19px;
`;
  const PostContainer = styled.div`
  padding: 10px;
  margin: 15px;
  `;

  const CommentContainer = styled.div`
  background-color: #f6f6f6;
  border-radius: 2px;
  padding: 12px 25px 12px;
  margin: 15px;
  box-shadow: 4px 4px #dadada;
  `;

  const PostTitle = styled.h1`
    
  `;

  const PostBody = styled.p`
    
  `;

  