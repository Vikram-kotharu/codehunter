// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'

const blogging = async(req,res)=>{
  let data1 = await fs.promises.readdir('codedata')
  
  let bob = []
  for(let items in data1){
    let data2 = await fs.promises.readFile(('codedata/'+ data1[items]),'utf-8')
    bob.push(JSON.parse(data2))
  }
  res.send(bob)
  
  
}

export default blogging
