import {client} from '@repo/db/client'

Bun.serve({
     port:8000,
     fetch(req,server){
          
        if(server.upgrade(req)){
           return;
        }
        return new Response("upgrade failed",{status:500});
     },
     websocket:{
        message(ws,message){
            client.users.create({
                data:{
                    name:Math.random().toString(),
                    email:Math.random().toString()
                }
            })
            ws.send(message)
        }
     }
})

