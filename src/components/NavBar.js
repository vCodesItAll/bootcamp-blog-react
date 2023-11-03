"use client"
import React from 'react'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark brand fixed-top">
          <div className="container">
            <Link className="navbar-brand" href="/">
              Vanessa's Blog
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"></li>
                <li>
                  <Link className="nav-link" href="/about">
                    About Me
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  )
}
