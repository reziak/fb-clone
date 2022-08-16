import Image from "next/image"

interface ContactProps {
  contact: {
    src: string
    name: string
  }
}

export const Contact = ({ contact }: ContactProps) => {
  return (
    <div
      role="button"
      className="flex items-center gap-4 p-2 hover:bg-gray-200 rounded transition-colors"
    >
      <Image
      className="rounded-full"
        src={contact.src}
        width={36}
        height={36}
        alt=""
        objectFit="cover"
      />
      <span>{contact.name}</span>
    </div>
  )
}