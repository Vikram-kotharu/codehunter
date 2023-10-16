import React, { useEffect, useState } from "react";
import Link from "next/link";
const Blog = (props) => {
  const [blog,getblogs] = useState(props.data)
  

   //const gets = async() =>{
    //let response = await fetch('http://localhost:3000/api/blogs')
    //let data = await response.json()
    //getblogs(data)
    //console.log(data)
    
  //}

   //useEffect(()=>{gets()},[])
   
  

  return (
    <>
      <div className="container">
        <div className="row">
          {blog.map((i)=>{return(
            <div className="col-lg-6 p-5">
            <Link href={`/blogpost/${i.slug}`}><h3>{i.title}</h3></Link>
            <p>{i.author}</p>
            <hr />
            <p>
              {i.description.substring(0,50)}...
            </p>
            <div className="d-flex flex-row">
              <button className="btn btn-primary ">save</button>
              <button className="btn btn-success ms-2">share</button>
            </div>
          </div>

          )})}
          
          
        </div>
      </div>
    </>
  );
};



export async function getServerSideProps(context){
  let response = await fetch('http://localhost:3000/api/blogs')
  let data = await response.json()
  return{
    props:{data}

  }
}

export default Blog;
