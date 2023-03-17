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
        <div id="top" className='md:unsticky bg-[#8b8b00] md:py-6  text-white md:grid lg:grid-cols-3 '>
            <h1 className="text-6xl col-span-2 ml-2 md:ml-6">{data.site.siteMetadata?.title || `Title`}</h1>
            <div>
                <ul className="text-center md:grid  md:grid-cols-4 md:gap-4 text-2xl mt-4">
                    <li className="hover:text-purple-700 uppercase">
                      <Link  to="/#about">About</Link>
                      </li>
                    <li><Link className="hover:text-purple-700 uppercase"  to='/#work'>Work</Link></li>
                    <li><Link className="hover:text-purple-700 uppercase"  to='/#projects'>Projects</Link></li>
                    <li><Link className="hover:text-purple-700 uppercase"  to='/notes'>Notes</Link></li>
                </ul>
            </div>
        </div>
        )
}
export default Header
