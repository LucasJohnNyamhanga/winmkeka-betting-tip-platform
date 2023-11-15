import Link from "next/link";

type linkerType = {
  name: string;
  link: string;
};

export default function Linker({ name, link }: linkerType) {
  return <Link href={link}>{name}</Link>;
}
