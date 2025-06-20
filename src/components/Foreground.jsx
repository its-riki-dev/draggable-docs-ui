import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {

    const ref = useRef(null)

    const data = [
        {
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe!",
            filesize: "0.9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "DownLoad Now", tagColor: "green" }
        },

        {
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe!",
            filesize: "0.9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" }
        },

        {
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe!",
            filesize: "0.9mb",
            close: true,
            tag: { isOpen: false, tagTitle: "DownLoad Now", tagColor: "green" }
        }
    ]

    return (
        <div ref = {ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
            {data.map((item, index) => (
                <Card key={index} data={item} reference = {ref}/>
            ))}
        </div>
    )
}

export default Foreground