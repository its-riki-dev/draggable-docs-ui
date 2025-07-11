import React from 'react'
import { motion } from "motion/react"
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";


const Card = ({ data, reference }) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.1} dragTransition={{bounceStiffness: 100, bounceDamping: 30}} className='relative flex-shrink-0 w-60 h-75 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden'>
      <FaRegFileAlt />
      <p className='text-sm mt-5 leading-tight font-semibold'>{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className='flex items-center justify-between py-2 px-8 mb-2'>
          <h5>{data.filesize}</h5>
          <span className='w-8 h-8 bg-zinc-600 rounded-full flex items-center justify-center'>
            {data.close ? <IoMdClose /> : <MdOutlineFileDownload size='.7em' color='#fff' />
            }
          </span>
        </div>
        {
          data.tag.isOpen && (
            <div className={`tag w-full h-11 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
              <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
            </div>
          )
        }
      </div>
    </motion.div>
  )
}

export default Card