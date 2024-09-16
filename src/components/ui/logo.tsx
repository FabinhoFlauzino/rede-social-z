import Image from "next/image";
import Link from "next/link";

type Props = {
  size: number
}

export function Logo({ size }: Props) {
  return (
    <Link href="/">
      <Image
        src={'/logo.svg'}
        alt="Z"
        width={size}
        height={size}
        quality={100}
      />
    </Link>
  )
}