import { client } from "@repo/db/client"

export default async function Home() {
  const resp=await client.users.findMany();
  return  <div>
    {JSON.stringify(resp)}
  </div>
}
