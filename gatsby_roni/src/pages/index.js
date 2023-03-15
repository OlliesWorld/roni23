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
import Seo from "../components/seo";

const components = {
    block: {
      // Ex. 1: customizing common block types
      h1: ({children}) => <h1 className="text-2xl text-white">{children}</h1>,
      blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,
      normal: ({children}) => <p className="break-word text-white mb-4 text-2xl">{children}</p>,
      // Ex. 2: rendering custom styles
      customHeading: ({children}) => (
        <h2 className="text-lg text-primary text-purple-700">{children}</h2>
      ),
    },
      listItem: {
        // Ex. 1: customizing common list types
        bullet: ({children}) => <ul className="">{children}</ul>,
      },
      marks: {
        link: ({children, value}) => {
          // const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
          // const target = !value.href.startsWith('/') ? '_blank' : undefined
          return (
            <a className="text-[#c6c60c] break-all" target='_blank' href={value.href} rel='noreferrer noopener'>
              {children}
            </a>
          )
          },
   
    },
     
  }
  // #0c243c
  // #0c243c -olive tone

const IndexPage = ({data}) => {
  const about = data.sanityAbout
  const project = data.allSanityProject.nodes
  const work = data.allSanityExperience.nodes
  const tags = data.allSanityTag.nodes
  
  const sortedProjects = project.sort((a, b) =>
  a.title.toLowerCase() < b.title.toLowerCase()
    ? -1
    : b.title.toLowerCase() > a.title.toLowerCase()
    ? 1
    : 0
);
  return (
    <>
    <Seo title="Roni Developer Portfolio | Front-end Developer" />
      <Header />
    <div className="bg-[#05386b] h-full py-8 scroll-smooth">
      <Social />
    
      <section className="lg:w-3/4 mt-4 md:mb-48 mx-auto md:flex">
     
          <h2 className="z-10 p-8 animate-border rounded-xl bg-white bg-gradient-to-r from-teal-500 via-purple-500 to-[#c6c60c] bg-[length:400%_400%]  transition hover:shadow-lg  focus:outline-none focus:ring text-[#05386b] text-4xl md:w-3/5 lg:w-2/5 my-auto md:ml-24 lg:ml-56">
              {about.subtitle}
            </h2>
       
      <div className="hidden md:block md:order-first lg:order-last lg:-ml-36 lg:w-2/3 md:-ml-12 my-auto ">
        <GatsbyImage image={about.mainImage.asset.gatsbyImage} alt={about.alt} className='fun lg:w-3/4 md:-ml-20 lg:m-auto z-0'/>  
      </div>
    </section>

      <section>
      <div className="h-full w-full bg-no-repeat lg:bg-50% bg-right bg-fixed md:bg-ollie ">
      <div className="text-white p-6 md:w-2/3 lg:w-1/2  md:my-48  mx-auto" id="about">
        <h2 className="text-6xl md:-ml-8 mb-8 font-bold text-[#c6c60c]">About Me</h2> 
        <div className="md:w-3/4">
        <PortableText   value={data.sanityAbout._rawBody} components={components} />
        </div>
        <div className=" mt-8 text-xl ">
          <p className="mb-4">Here are a few technologies that I love working with:</p>
          <ul className="grid grid-rows-6 md:grid-rows-4 grid-flow-col gap-4">
            {tags.map((tag) => (
              <li key={tag._id} className=' flex'><CgBolt className="mt-1 mr-2 text-[#c6c60c]" />{tag.name}</li>
            ))}
          </ul>
        </div>
        </div>
        </div>
      </section>
      {/* {console.log(work[3]._rawDescription)} */}
      <section className=' p-6 md:w-2/3 lg:w-1/2 mx-auto md:my-48' id="work"> 
            <h2 className="text-6xl md:-ml-8 mb-8 font-bold text-[#c6c60c]">Work</h2>
            <Tabs defaultIndex={0} className="text-white text-xl">
                <TabList> 
                <Tab>{work[2].company}</Tab>
                <Tab>{work[0].company}</Tab>
                <Tab>{work[1].company}</Tab>
                <Tab disabled>Future Opportunity</Tab>
                </TabList>
                <TabPanel>
                <div className="md:flex mb-4 justify-between">
                  <div className="flex">
                    <CgBolt className="mt-1 mr-4 text-[#c6c60c]0" />
                    <h3 className=" text-[#c6c60c] font-bold">{work[2].title} @ {work[2].company}</h3>
                  </div>
                   <p className="text-base">{work[2].time}</p>    
                  
                </div>
                <div className="work ml-0 lg:ml-6">
                  <PortableText  value={work[2]._rawDescription} components={components} />
                  {work[2].href && <a className="hover:text-white text-[#c6c60c] " href={work[2].href}target="_blank" rel="noreferrer">Newsletter Page</a>}  
                </div>
                </TabPanel>
                <TabPanel>
                <div className="md:flex mb-4 justify-between">
                  <div className="flex">
                    <CgBolt className="mt-1 mr-4 text-[#c6c60c]" />
                    <h3 className=" text-[#c6c60c] font-bold">{work[0].title} @ {work[0].company}</h3>
                  </div>
                   <p className="text-base">{work[0].time}</p>                   
                </div>
                <div className="work ml-0 lg:ml-6">
                  <PortableText  value={work[0]._rawDescription} components={components} />
                  {work[0].href && <a href={work[0].href} className="hover:text-white text-[#c6c60c]" target="_blank" rel="noreferrer">Deployed Site</a>}         
                </div>
                </TabPanel>
                <TabPanel>
                <div className="md:flex mb-4 justify-between">
                  <div className="flex">
                    <CgBolt className="mt-1 mr-4 text-[#c6c60c]" />
                    <h3 className=" text-[#c6c60c] font-bold">{work[1].title} @ {work[1].company}</h3>
                  </div>
                   <p className="text-base">{work[1].time}</p>                   
                </div>
                <div className="work lg:ml-6">
                  <PortableText  value={work[1]._rawDescription} components={components} />
                  {work[1].href && <a className="hover:text-white text-[#c6c60c]" href={work[1].href} target="_blank" rel="noreferrer">Deployed Site</a>             }
                </div>
                </TabPanel>
                <TabPanel>
                  <p>this is the spot you can fill!</p>
                  </TabPanel>
            </Tabs>
        </section>
        
        {/* Projects */}
      <section className="mx-auto md:my-48" id="projects">  
        <h2 className="md:pr-64 text-center text-6xl font-bold">Built <span className='text-[#c6c60c]'>Projects</span></h2>
        <p className="text-white text-center text-sm">checkout my github for more projects that aren't deployed!</p>
        
        {sortedProjects.sort().map((item) => (
          <div key={item.id} className="grid lg:grid-cols-2 gap-4 md:w-2/3 lg:w-1/2 m-auto my-8 px-12 rounded-lg text-white">
      
           <GatsbyImage image={item.mainImage.asset.gatsbyImage} alt={item.alt} className='max-h-[20rem]'/>
           <div>
           <h2 className="text-2xl font-bold underline">{item.title}</h2>
           <h3 className="my-2">{item.subtitle}</h3>
           
           
           <p className="lg:-ml-12 p-6 bg-[#00468b] border-[#00468b] drop-shadow-lg  ">{item.description}</p>
           <div  className="flex flex-wrap mt-4 align-self-center">
             <a href={item.github} target="_blank" rel="noreferrer" alt="link to project github repo"><FiGithub className="text-white text-2xl mb-4 lg:mb-0 hover:text-[#c6c60c] mr-4" /></a>
             <a href={item.href} target="_blank" rel="noreferrer" alt="link to projects site"><CgArrowTopRightR className="text-white text-2xl mb-4 lg:mb-0 hover:text-[#c6c60c] mr-4"/></a>
             <div className="flex gap-4">
             {/* <p>tags</p> */}
             {/* {console.log(item.tags)} */}
             {item.tags.map((tag) => (
               <div key={tag._id}  className=''>
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
    </div>
      <Footer />
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
        href
        mainImage {
          asset {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 850)
         
            assetId
          }
        }
        tags {
          _id
          name
        }
        }
      }
 allSanityProject {
      nodes {
        _id
        subtitle
        title
        description
        alt
        href
        github
        mainImage {
          asset {
            gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 850)
          }
        }
        tags {
          name
          _id
        }
      }
    }
    allSanityTag {
    nodes {
      _id
      name
    }
  }
  }

`