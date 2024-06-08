'use client'
import { link } from "@/Types/link"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({url,title}:link) => {
    const pathName = usePathname()
  return (
    <Link  href={url} className={`${pathName === url && "border-b-4 rounded-md border-slate-700"}`}>{title}</Link>
  )
}

export default NavLink