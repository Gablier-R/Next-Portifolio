import Head from "next/head"
import Header from "../sections/Header"
import Footer from "../sections/Footer"

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>Gabriel</title>
                <meta name="Description" content="Create dark mode in next and tailwind"/>
            </Head>


            <div className="min-h-screen flex flex-col">
                <Header/>

                <main className="flex-grow">
                    {children}
                </main>


                <Footer/>
            </div>

        </>
    )
}
export default Layout