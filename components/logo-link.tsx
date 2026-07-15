"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface LogoLinkProps {
  className?: string
  imageClassName?: string
}

export function LogoLink({ className = "", imageClassName = "" }: LogoLinkProps) {
  const pathname = usePathname()
  
  return (
    <Link 
      href="/" 
      onClick={(e) => {
        if (pathname === '/') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }}
      className={className}
    >
      <img src="/logo.png" alt="Logo" className={imageClassName} />
      <span className="text-xl font-extrabold text-white tracking-tight">IPTV<span className="text-[#22D3EE]">Startup</span></span>
    </Link>
  )
}
