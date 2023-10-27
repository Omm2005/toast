import Landing from "~/components/Home/Landing"
import Main from "~/components/Home/Main"
import { getAuthSession } from '~/server/auth'
import Navbar from "~/components/Navbar"

export default async function Home() {
  const session = await getAuthSession()
  return (
    <div className="container w-full h-screen">
            <Navbar />
      {
        session?.user ? (
            <Main />
          ) : (
            <Landing />
            )
      }
    </div>
  )
}
