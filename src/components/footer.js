import React from 'react'

function Footer() {
    return (
        <footer className="bg-orange-200">
        <nav className="flex justify-between max-w-6xl p-4 mx-auto text-sm md:p-8">
          <p className="text-black">
            Created by{` `}
            <a
              className="font-bold no-underline"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kenny Whyte
            </a>
          </p>

          <p>
            <a
              className="font-bold text-black no-underline"
              href="https://github.com/kawhyte"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>

          <div className="text-sm py-1 text-black">
              <span className="pr-2">Illustrations from</span>
        
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="  hover:text-indigo-500"
                href="https://icons8.com/"
              >
                icons8
              </a>
    
            </div>
        </nav>
      </footer>
    )
}

export default Footer
