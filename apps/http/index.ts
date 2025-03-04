import { client } from "@repo/db/client";
import express from 'express';




const app=express();

app.use(express.json());

app.post("/signup",async(req,res)=>{
     
    const {name,email}=req.body;
      
  const resp=await client.users.create({
    data:{
        name,
        email,
    }
  }) 

  res.json({
    message:"signed Up"
  })

})

app.post("/signin",async(req,res)=>{
    const {name,email}=req.body;
      
    const resp=await client.users.findFirst({
      where:{
        email
      }
    }) 

    if(resp){   
        res.json({
            message:"signed Up"
        })
    } else{
        res.json({
            message:"not_found"
        })
    }
})


app.get("/todos",async(req,res)=>{
    const {userId}=req.body;
    const resp=await client.todo.findMany({
        where:{
            userId:userId
        }
    })
    res.json({
        resp
    })
})

app.post("/addtodo",async(req,res)=>{

    const {mytodo,userId}=req.body;

     const resp=await client.todo.create({
        data:{
        task:mytodo,
        userId
        }
    })

    res.json({
        message:"task_added"
    })
})

app.listen(3001,()=>{
    console.log("server started!!")
})