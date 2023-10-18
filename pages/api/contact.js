import * as fs from 'fs';

const contact = (req,res) => {
  if(req.method === "POST"){
    const {name,email,desc,phone} = req.body
    const v1 = {name,email,desc,phone}
    fs.appendFile('components/contact.json',JSON.stringify(v1),'utf-8',(err)=>{
        console.log(err)
    })
    res.send({name,email,desc,phone})
  }
  else{
    res.send('get request from you recieved')
  }
}

export default contact