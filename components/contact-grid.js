import React from 'react'

//icons
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiChessdotcom } from "react-icons/si";



//Next Components
import Link from 'next/link';

export function ContactGrid({about = false, footer = false}){
  return (
    <div>
        <div className={`flex gap-6 items-center ${ about === true ? 'pb-12 md:pb-16' : ''} ${ footer === true ? 'md:flex hidden' : 'flex'}`}>
            <Link href="https://github.com/vensah-dev">
              <FaGithub className={`w-8 h-8 hover:fill-white100 fill-white75 ${about === true ? 'animate-blurfadein' : ''}`} style={{animationDelay: "1s"}} />
            </Link>

            <Link href="https://www.instagram.com/vensah_dev">
              <RiInstagramFill className={`w-8 h-8 hover:fill-white100 fill-white75 ${about === true ? 'animate-blurfadein' : ''}`} style={{animationDelay: "1.3s"}}/>
            </Link>

            <Link href="https://www.chess.com/member/vensah">
              <SiChessdotcom className={`w-7 h-8 hover:fill-white100 fill-white75 ${about === true ? 'animate-blurfadein' : ''}`} style={{animationDelay: "1.6s"}}/>
            </Link>
        </div>
    </div>
  )
}
