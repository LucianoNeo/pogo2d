
import { GithubLogo, LinkedinLogo, TwitterLogo } from "phosphor-react"

function Social() {

    return(
    <div className="flex w-full flex-row justify-evenly">
            <div className="flex w-14 h-14 items-center justify-center hover:  rounded-full  hover:bg-blue-400 hover:text-white"
            style={{boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)', transition: '0.5s'}}
            >
            <a href="https://www.linkedin.com/in/luciano-dos-santos-bueno-58363373/"target='_blank' ><LinkedinLogo size={32} /></a>
            </div>
            <div className="flex w-14 h-14 items-center justify-center hover:  rounded-full  hover:bg-blue-400 hover:text-white"
            style={{boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)', transition: '0.5s'}}
            >
            <a href="https://github.com/lucianoneo"target='_blank'><GithubLogo size={32} /></a>
            </div > 
            <div className="flex w-14 h-14 items-center justify-center hover:  rounded-full  hover:bg-blue-400 hover:text-white"
            style={{boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)', transition: '0.5s'}}
            >
            <a href="https://twitter.com/lucianoneo"target='_blank'><TwitterLogo size={32} /></a>
            </div>
      </div>
    )
}

export default Social