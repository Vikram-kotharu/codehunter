import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
const Slug = (props) => {
  const [fdata, blogging] = useState(props.data)
  console.log(props)
  //const router = useRouter();
  //const { slug } = router.query;
  
  //const finaldata = async()=>{
    //const response = await fetch(`http://localhost:3000/api/getblogs?vikram=${slug}`)
    //const data = await response.json()
    //blogging(data)
  //}
  //useEffect(()=>{
    //finaldata()
  //},[])
  console.log(fdata)
  return (
    <>
      <div className="container">
        <div className="row">
          <h3 className="mt-5">{fdata.title}</h3>
          <p>{fdata.author}</p>
          <hr />
          <p>
            {
              fdata.description
            }
          </p>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context){
  const {slug} = context.query
  const response = await fetch(`http://localhost:3000/api/getblogs?vikram=${slug}`)
  const data = await response.json()
  return{
    props:{data}

  }
}

export default Slug;
