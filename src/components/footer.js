import React from 'react'

function Footer() {
    return (
        <footer className="bg-orange-200">
        <nav className="flex justify-between max-w-6xl p-4 mx-auto text-sm md:p-8">
          <p className="text-black">
            Created by{` `}
            <a
              className="font-bold no-underline"
              href="https://bryant.io"
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
        </nav>
      </footer>
    )
}

export default Footer
