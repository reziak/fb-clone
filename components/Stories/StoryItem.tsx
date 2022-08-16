import Image from "next/image"
import Link from "next/link"
import { Story } from "."

interface StoryItemProps {
  story: Story
}

export const StoryItem = ({ story }: StoryItemProps) => {
  return (
    <Link href={`/stories/${story.storyUrl}`}>
      <a className="group rounded-xl overflow-hidden w-[129px] h-[230px] bg-white cursor-pointer flex flex-col hover:bg-gray-300 transition-colors relative drop-shadow last:hidden lg:last:block penult:hidden md:penult:block">
        <span className="block h-[40px] w-[40px] absolute z-10 rounded-full border border-4 border-blue-500 overflow-hidden top-4 left-4">
          <Image 
            src={story.author.imageUrl}
            width={40}
            height={40}
            objectFit="cover"
            alt=""
          />
        </span>
        <Image
          src={story.storyImage}
          width={129}
          height={230}
          alt=""
          objectFit="cover"
          className="group-hover:brightness-75 group-hover:scale-110 transition-all duration-500"
        />
        <p className="h-14 absolute text-white font-medium px-4 py-2 bottom-0 bg-gradient-to-t from-black-opacity-75 to-transparent left-0 right-0 flex items-end">
          {story.author.name}
        </p>
      </a>
    </Link>
  )
}