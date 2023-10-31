import Social from "../components/Social"

const Footer = () => {
    return (

        <footer className="py-6 text-center text-gray-500 text-base">
            <Social></Social>
            <span className="dark:text-gray-100 text-gray-900 font-bold text-lg mr-2"> Gabriel</span>&copy; {new Date().getFullYear()} All Rights Reserved.

        </footer>
    )
}
export default Footer