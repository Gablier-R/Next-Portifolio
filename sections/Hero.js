import Button from "../components/Button"

const Hero = () => {
    return (
        
        <section className="mt-16">

            <h1 className="text-7xl font-bold">Iae, eu sou o 
            <span className="dark:text-purple-600"> Gabriel</span>
            </h1>
            <h3 className="text-4xl my-3">Eu sou um Web Designer</h3>
            <p className="text-gray-700 mb-8">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>

            <Button className="bg-purple-600 text-white px-6"> 
                Hire Me!
            </Button>

        </section>
    )
}
export default Hero