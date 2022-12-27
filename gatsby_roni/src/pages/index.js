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
import Footer from "../components/footer"

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
      <section className="lg:w-3/4 mt-24 md:mb-48 mx-auto md:flex">
        <h2 className="z-10 bg-cyan-100/90 text-4xl p-6 md:w-3/5 lg:w-2/5 my-auto md:ml-24 lg:ml-56">
            {about.subtitle}
          </h2>
      <div className="lg:-ml-40 lg:w-2/3 md:-ml-12 my-auto ">
        <GatsbyImage image={about.mainImage.asset.gatsbyImage} alt={about.alt} className='lg:w-3/4 md:-ml-24 lg:m-auto z-0'/>  
      </div>
    </section>
      
      <section className="p-6 md:w-2/3 lg:w-1/2 my-12 md:my-48  mx-auto" id="about">
        <h2 className="text-xl md:-ml-8 mb-8 font-bold text-yellow-600">About Me</h2> 
        <p className=" text-yellow-50 text-xl">{about.body}</p>
        <div className="text-white mt-8 text-xl ">
          <p>Here are a few technologies that I love working with:</p>
          <ul className="grid grid-rows-5 md:grid-rows-4 grid-flow-col gap-4">
            {tags.map((tag) => (
              <li key={tag.id} className='flex'><CgBolt className="mt-1 mr-4 text-yellow-600" />{tag.name}</li>
            ))}
          </ul>
        </div>
      </section>
  
      <section className='p-6 md:w-2/3 lg:w-1/2 mx-auto md:my-48' id="work"> 
            <h3 className="text-xl md:-ml-8 mb-8 font-bold text-yellow-600">Work</h3>
            <Tabs defaultIndex={0} className="text-white text-xl">
                <TabList>
                {/* <Tab>{work[1].company}</Tab>
                <Tab>{work[2].company}</Tab>
                <Tab >{work[0].company}</Tab> */}
                <Tab>{work[3].company}</Tab>
                <Tab disabled>Future Opportunity</Tab>
                </TabList>

                {/* <TabPanel>
                <div className="flex mb-4"><CgBolt className="mt-1 mr-4 text-yellow-600" /><h3>{work[1].title}</h3></div>
                <p>{work[1].description}</p>
                </TabPanel>
                <TabPanel>
                <div className="flex mb-4"><CgBolt className="mt-1 mr-4 text-yellow-600" /><h3>{work[2].title}</h3></div>
                <p>{work[2].description}</p>
                </TabPanel>
                <TabPanel>
                <div className="flex mb-4"><CgBolt className="mt-1 mr-4 text-yellow-600" /><h3>{work[0].title}</h3></div>
                <p>{work[0].description}</p>
                </TabPanel> */}
                
                <TabPanel>
                <div className="flex mb-4"><CgBolt className="mt-1 mr-4 text-yellow-600" /><h3 >{work[3].title} @ {work[3].company}</h3>
                <p>{work[3].time}</p>
                </div>
                <p className="overflow-hidden break-words">{work[3].description}</p>
                </TabPanel>
                <TabPanel><p>this is the spot you can fill!</p></TabPanel>
            </Tabs>
        </section>
        
        {/* Projects */}
      <section className="md:my-48" id="projects">  
        <h2 className="text-center text-3xl">Built <span className='text-yellow-500'>Projects</span></h2>
        
        {project.map((item) => (
          <div key={item.id} className="grid lg:grid-cols-2 gap-4 md:w-2/3 lg:w-1/2 m-auto my-8 p-4 rounded-lg text-white">
      
           <GatsbyImage image={item.mainImage.asset.gatsbyImage} alt={item.alt} className='max-h-[20rem]'/>
           <div>
           <h2 className="text-2xl font-bold underline">{item.title}</h2>
           <h3 className="my-2">{item.subtitle}</h3>
           
           
           <p className="lg:-ml-12 p-6 bg-cyan-900 border-cyan-900 drop-shadow-lg">{item.description}</p>
           <div  className="md:flex mt-4 ">
             <a href={item.github} target="_blank" rel="noreferrer" aria-label="link to project github repo"><FiGithub className="text-white text-2xl mb-4 hover:text-yellow-600 mr-4" /></a>
             <a href={item.href} target="_blank" rel="noreferrer" aria-label="link to projects site"><CgArrowTopRightR className="text-white text-2xl mb-4 hover:text-yellow-600 mr-4"/></a>
             <div className="flex gap-4">
             {/* <p>tags</p> */}
             {item.tags.map((tag) => (
               <div key={tag.id}  className='my-2'>
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
            <div className="mt-3 leading-6 ">
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
    body
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
        description
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