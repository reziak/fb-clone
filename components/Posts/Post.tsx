import Image from "next/image"
import { DotsHorizontalIcon } from '@heroicons/react/solid'
import { ThumbUpIcon, ChatAltIcon, ShareIcon } from '@heroicons/react/outline'
import { useEffect, useState } from "react"
import { format } from 'date-fns'

export type PostType = {
  userImage: string
  userName: string
  userEmail: string
  postImageUrl?: string
  message: string
  timestamp: any
}

interface SinglePostProps {
  post: PostType
}

export const Post = ({ post }: SinglePostProps) => {
  console.log(post)


  const dateFormatted = post.timestamp 
    ? format(
      new Date(post.timestamp.toDate()),
      "MMMM',' do yyyy 'at' h:mm aaa"
    ) 
    : format(
      new Date(),
      "MMMM',' do yyyy 'at' h:mm aaa"
    )

  return (
    <div className="bg-white rounded-lg drop-shadow flex flex-col mt-4">
      <div className="flex justify-between p-4 pb-0">
        <div className="flex items-center gap-2">
          <Image 
            className="w-10 h-10 rounded-full"
            src={post.userImage}
            width={40}
            height={40}
            objectFit="cover"
            alt=""
          />
          <div className="flex flex-col">
            <strong className="font-medium text-gray-800">{post.userName}</strong>
            <span className="text-sm text-gray-500">{dateFormatted}</span>
          </div>
        </div>
        <DotsHorizontalIcon 
          className="w-10 h-10 rounded-full text-gray-600 p-2.5 cursor-pointer hover:bg-gray-100 transition-colors"
        />
      </div>
      <div className="p-4">
        <p>{post.message}</p>
      </div>
      {post.postImageUrl && (
        <div className="w-full h-56 md:h-96 relative border-t border-gray-200">
          <Image 
            src={post.postImageUrl}
            objectFit="contain"
            layout="fill"
            alt=""
          />
        </div>
      )}
      <div className="flex items-center gap-1 px-4 py-1 border-t border-gray-200">
        <button className="flex items-center gap-2 justify-center grow hover:bg-gray-100 transition-colors rounded py-2 basis-0">
          <ThumbUpIcon className="w-6 h-6 text-gray-500" />
          <span className="text-gray-500">Like</span>
        </button>
        <button className="flex items-center gap-2 justify-center grow hover:bg-gray-100 transition-colors rounded py-2 basis-0">
          <ChatAltIcon className="w-6 h-6 text-gray-500" />
          <span className="text-gray-500">Comment</span>
        </button>
        <button className="flex items-center gap-2 justify-center grow hover:bg-gray-100 transition-colors rounded py-2 basis-0">
          <ShareIcon className="w-6 h-6 text-gray-500" />
          <span className="text-gray-500">Share</span>
        </button>
      </div>
    </div>
  )
}