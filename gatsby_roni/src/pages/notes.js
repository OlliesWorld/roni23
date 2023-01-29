import  React from "react"
import { graphql } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"
import Header from "../components/header"
import {PortableText} from "@portabletext/react";


const body = {
    block: {
      // Ex. 1: customizing common block types
      h1: ({children}) => <h1 className="text-2xl text-white">{children}</h1>,
      blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,
      normal: ({children}) => <p className="break-all text-white mb-4 text-2xl">{children}</p>,
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

const NotesPage = ({data}) => {
    const notes = data.notes.nodes
    console.log(notes)
    return (
        <main className="bg-slate-800 h-screen text-blue-900 ">
        <Header />
        <h2 className="text-6xl text-center">Notes</h2>
        <section className="text-center w-1/2 m-auto ">
            <p>this is where notes go</p>
            {notes.map((note) => (
                <div key={note._id} className="border-4 border-blue-900 mb-8">
                <div className="flex justify-between w-1/2 m-auto text-2xl font-bold">
                    <p>{note.title}</p>
                    <p>{note.author.name}</p>
                </div>
            <div className="">
            <PortableText   value={note._rawBody} components={body} />
            </div>
                    <p className="text-sm">Date: {note.publishedAt}</p>
            </div>
            ))}
            
            
        </section>
        </main>
    )
}
export default NotesPage;

export const query = graphql`
  query notesQuery {
   notes: allSanityPost {
      nodes {
        author {
          name
        }
        _id
        title
        publishedAt(formatString: "YYYY MMMM DD")
        categories {
          title
        }
        _rawBody
      }
    }
  
  }
  `