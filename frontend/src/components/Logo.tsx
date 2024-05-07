import Image from "next/image";
import LogoImage from "../../public/Logo.svg"
import Link from "next/link";

type LogoProps = {
  className?: string
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/">
      <Image className={className} src={LogoImage} alt="Logo" width="200" height="40" />
    </Link>
  )
}