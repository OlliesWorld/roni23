import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"


const Header = ({siteTitle}) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
return (
        <div className='z-50  md:unsticky bg-[#8b8b00] py-6  text-white/80 md:grid md:grid-cols-3 '>
            <h1 className="text-6xl col-span-2 ml-6">{data.site.siteMetadata?.title || `Title`}</h1>
            <div className="">
                <ul className="text-center grid grid-cols-3 md:grid-cols-4 md:gap-4 text-2xl mt-4">
                    <li className="hover:text-yellow-600 ">
                      <Link  to="#about">About</Link>
                      </li>
                    <li><Link className="hover:text-yellow-600 "  to='#work'>Work</Link></li>
                    <li><Link className="hover:text-yellow-600 "  to="#projects">Projects</Link></li>

                </ul>
            </div>
        </div>
        )
}
export default Header
