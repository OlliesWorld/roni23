import  React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Header from "../components/header"
import Social from "../components/social"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { CgBolt } from "@react-icons/all-files/cg/CgBolt";
import ContactForm from "../components/form"
import {FiGithub } from "@react-icons/all-files/fi/FiGithub";
import { CgArrowTopRightR } from "@react-icons/all-files/cg/CgArrowTopRightR";
import Footer from "../components/footer";
import {PortableText} from "@portabletext/react";


const components = {
    block: {
      // Ex. 1: customizing common block types
      h1: ({children}) => <h1 className="text-2xl text-white">{children}</h1>,
      blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,
      normal: ({children}) => <p className="text-white mb-4 text-2xl">{children}</p>,
      // Ex. 2: rendering custom styles
      customHeading: ({children}) => (
        <h2 className="text-lg text-primary text-purple-700">{children}</h2>
      ),
      listItem: {
        // Ex. 1: customizing common list types
        bullet: ({children}) => <ul className="">{children}</ul>,
      },
      marks: {
        link: ({children, value}) => {
          // const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
          // const target = !value.href.startsWith('/') ? '_blank' : undefined
          return (
            <a className="text-yellow-600" target='_blank' href={value.href} rel='noreferrer noopener'>
              {children}
            </a>
          )
          },
    },
    },
      lists: {
        // Ex. 1: customizing common list types
        bullet: ({children}) => <ul className="">{children}</ul>,
      },
      
     
  }


const IndexPage = ({data}) => {
  const about = data.sanityAbout
  const project = data.allSanityProject.nodes
  const work = data.allSanityExperience.nodes
  const tags = data.allSanityTag.nodes

  return (
    <>
    <div className="bg-cyan-800 h-full py-8 scroll-smooth">
      <Header />
      <Social />
      <section className="lg:w-3/4 mt-4 md:mb-48 mx-auto md:flex">
     
          <h2 className="z-10 p-8 animate-border rounded-xl bg-white bg-gradient-to-r from-teal-500 via-purple-500 to-yellow-600 bg-[length:400%_400%]  transition hover:shadow-lg  focus:outline-none focus:ring text-cyan-900 text-4xl md:w-3/5 lg:w-2/5 my-auto md:ml-24 lg:ml-56">
              {about.subtitle}
            </h2>
       
      <div className="hidden md:block md:order-first lg:order-last lg:-ml-36 lg:w-2/3 md:-ml-12 my-auto ">
        <GatsbyImage image={about.mainImage.asset.gatsbyImage} alt={about.alt} className='fun lg:w-3/4 md:-ml-20 lg:m-auto z-0'/>  
      </div>
    </section>
      
      <section className="p-6 md:w-2/3 lg:w-1/2 my-12 md:my-48  mx-auto" id="about">
        <h2 className="text-xl md:-ml-8 mb-8 font-bold text-yellow-600">About Me</h2> 
        <PortableText  value={data.sanityAbout._rawBody} components={components} />
        <div className="text-white mt-8 text-xl ">
          <p className="mb-4">Here are a few technologies that I love working with:</p>
          <ul className="grid grid-rows-5 md:grid-rows-4 grid-flow-col gap-4">
            {tags.map((tag) => (
              <li key={tag.id} className=' flex'><CgBolt className="mt-1 mr-2 text-yellow-600" />{tag.name}</li>
            ))}
          </ul>
        </div>
      </section>
  
      <section className='p-6 md:w-2/3 lg:w-1/2 mx-auto md:my-48' id="work"> 
            <h3 className="text-6xl text-center mb-8 font-bold text-yellow-600">Work</h3>
            <Tabs defaultIndex={0} className="text-white text-xl">
                <TabList>
                <Tab>{work[3].company}</Tab>
                <Tab disabled>Future Opportunity</Tab>
                </TabList>

                <TabPanel>
                <div className="md:flex mb-4 justify-between">
                  <div className="flex">
                    <CgBolt className="mt-1 mr-4 text-yellow-600" />
                    <h3 className=" text-yellow-600 font-bold">{work[3].title} @ {work[3].company}</h3>
                  </div>
                   <p className="text-base">{work[3].time}</p>
                    
                </div>
                <div className="work ml-6 md:ml-0 lg:ml-6">

                  <PortableText  value={work[3]._rawDescription} components={components} />
                </div>
              
                </TabPanel>
                <TabPanel>
                  <p>this is the spot you can fill!</p>
                  </TabPanel>
            </Tabs>
        </section>
        
        {/* Projects */}
      <section className="md:my-48" id="projects">  
        <h2 className="text-center text-6xl">Built <span className='text-yellow-600'>Projects</span></h2>
        
        {project.map((item) => (
          <div key={item.id} className="grid lg:grid-cols-2 gap-4 md:w-2/3 lg:w-1/2 m-auto my-8 p-4 rounded-lg text-white">
      
           <GatsbyImage image={item.mainImage.asset.gatsbyImage} alt={item.alt} className='max-h-[20rem]'/>
           <div>
           <h2 className="text-2xl font-bold underline">{item.title}</h2>
           <h3 className="my-2">{item.subtitle}</h3>
           
           
           <p className="lg:-ml-12 p-6 bg-cyan-900 border-cyan-900 drop-shadow-lg">{item.description}</p>
           <div  className="flex flex-wrap mt-4 align-self-center">
             <a href={item.github} target="_blank" rel="noreferrer" aria-label="link to project github repo"><FiGithub className="text-white text-2xl mb-4 lg:mb-0 hover:text-yellow-600 mr-4" /></a>
             <a href={item.href} target="_blank" rel="noreferrer" aria-label="link to projects site"><CgArrowTopRightR className="text-white text-2xl mb-4 lg:mb-0 hover:text-yellow-600 mr-4"/></a>
             <div className="flex gap-4">
             {/* <p>tags</p> */}
             {item.tags.map((tag) => (
               <div key={tag.id}  className=''>
                 {tag.name === 'Gatsby' && (<p className="text-purple-700">{tag.name}</p>)}
                 {tag.name === 'Netlify' && (<p className="text-green-500 ">{tag.name}</p>)}
                 {tag.name === 'Styled Components' && (<p className="text-pink-500">{tag.name}</p>)}
                 {tag.name === 'TailwindCss' && (<p className="text-teal-400">{tag.name}</p>)}
                 {tag.name === 'Sanity.io' && (<p className="text-red-500">{tag.name}</p>)}
                 </div>
             ))}
           </div>
           </div>
           </div>
           </div>
        ))}
       
        </section>
       <section className='p-6 md:w-2/3 lg:w-1/2 mx-auto my-6 md:my-48 text-white' >
         <h3 className="text-4xl">Get In Touch</h3>
         <p className="text-xl">I am currently looking for my next full-time opportunity. Please reach out my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        
         <details className="mt-8 open:bg-slate-600   open:ring-1 open:ring-black/5 open:shadow-lg md:p-6 rounded-lg transform-gpu delay-75 duration-100 ease-in-out ">
          <summary className="leading-6 text-slate-900 dark:text-white font-semibold select-none">
            Send a message
            </summary>
            <div className=" ">
              <ContactForm />
            </div>
      </details>
              
       </section>
      <Footer />
    </div>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
export const query = graphql`
  query homeQuery {
    sanityAbout {
    title
    subtitle
    _rawBody
    alt
    mainImage {
      asset {
        gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 850)

        assetId
      }
    }
  } 
  allSanityExperience {
        nodes{
        title
        company
        time
        _rawDescription
        alt
        mainImage {
          asset {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 850)
         
            assetId
          }
        }
        tags {
          id
          name
        }
        }
      }
 allSanityProject {
      nodes {
        id
        subtitle
        title
        description
        alt
        href
        mainImage {
          asset {
            gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 850)
          }
        }
        tags {
          name
          id
        }
      }
    }
    allSanityTag {
    nodes {
      id
      name
    }
  }
  }

`