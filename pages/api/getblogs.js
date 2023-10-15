import * as fs from 'fs'

const getting = (req,res)=>{
    const vovo = req.query
    console.log(vovo)
    fs.readFile(`codedata/${req.query.vikram}.json`,'utf-8',(err,data)=>{
        if(err){
            res.status(500).send({error:"noo blog of that topic exists"})
        }
        else{
            res.send(data)
        }
    })
    

}

export default getting