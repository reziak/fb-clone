import { useSession } from "next-auth/react"
import Image from "next/image"
import { FormEvent, useRef, useState } from "react"
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { CameraIcon, VideoCameraIcon, TrashIcon } from '@heroicons/react/solid'
import { firebaseDB, firebaseStorage } from '../firebase'
import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore"
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"

export const FeedEntryForm = () => {
  const { data: session } = useSession()
  const inputRef = useRef<HTMLInputElement>(null)
  const filePickerRef = useRef<HTMLInputElement>(null)
  const [imageToPost, setImageToPost] = useState<string | ArrayBuffer | null>(null)

  const handleCreatePost = async (event: FormEvent) => {
    event.preventDefault()

    if (!inputRef.current?.value) return

    try {
      const post = await addDoc(collection(firebaseDB, 'posts'), {
        message: inputRef.current.value,
        userName: session?.user?.name,
        userEmail: session?.user?.email,
        userImage: session?.user?.image,
        timestamp: serverTimestamp(),
      })

      if (imageToPost) {
        const uploadRef = ref(firebaseStorage, `posts/${post.id}`)
        const uploadTask = uploadBytesResumable(
          uploadRef, 
          imageToPost as ArrayBuffer
        )
        
        uploadTask.on("state_changed", 
          (_snapshot) => {
            console.log("Upload in progress")
          },
          (error) => {
            console.error(error)
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setDoc(
                doc(firebaseDB, 'posts', post.id),
                { postImageUrl: downloadURL },
                { merge: true }
              )
            })
          }
        )  
      }
    } catch (err) {
      console.error(`Something wrong with the post: ${err}`)
    }
    
    handleRemoveImageFromPost()
    inputRef.current.value = ''
  }

  const handleAddImageToPost = () => {
    const files = filePickerRef.current?.files

    if (files && files.length > 0) {
      setImageToPost(files[0] as any)
    }

  }

  const handleRemoveImageFromPost = () => {
    setImageToPost(null)
    filePickerRef.current!.value = ''
  }

  return (
    <div className="mx-auto max-w-[403px] md:max-w-[540px] lg:max-w-[677px] mt-4 bg-white rounded-lg drop-shadow px-4">
      <div className="py-3 flex items-center gap-2 flex-wrap">
        <Image
          className="rounded-full" 
          src={session?.user?.image || '/images/default-user-icon.jpg'}
          width={40}
          height={40}
          alt=""
        />
        <form className="grow">
          <input 
            type="text" 
            placeholder={`What is on your mind right now, ${session?.user?.name?.split(' ')[0]}?`}
            className="bg-gray-100 px-4 py-2 rounded-full w-full focus:outline-none hover:bg-gray-200 focus:bg-gray-200"
            ref={inputRef} 
          />
          <button hidden type="submit" onClick={handleCreatePost}>Submit</button>
        </form>
        {imageToPost && (
          <button
            onClick={handleRemoveImageFromPost}
            className="group w-full h-80 overflow-hidden rounded-lg relative grow-0 shrink-0 basis-full bg-gray-400 p-4"
          >
            <Image 
              src={URL.createObjectURL(imageToPost as any)}
              layout="fill"
              objectFit="contain"
              alt=""
            />
            <TrashIcon className="absolute bottom-4 right-4 bg-white p-2 h-10 w-10 rounded-full drop-shadow group-hover:bg-gray-200 transition-colors" />
          </button>
        )}
      </div>

      <hr className="border-1" />

      <div className="flex items-center py-3">
        <div
          role="button"
          className="flex flex-1 items-center gap-2 hover:bg-gray-100 transition-colors rounded-lg justify-center py-2"
        >
          <VideoCameraIcon className="h-7  text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">
            Live video
          </p>
        </div>

        <div
          role="button"
          onClick={() => filePickerRef.current?.click()}
          className="flex flex-1 items-center gap-2 hover:bg-gray-100 transition-colors rounded-lg justify-center py-2"
        >
          <CameraIcon className="h-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">
            Photo/Video
          </p>
          <input
            hidden
            type="file"
            onChange={handleAddImageToPost}
            ref={filePickerRef}
          />
        </div>

        <div
          role="button"
          className="flex flex-1 items-center gap-2 hover:bg-gray-100 transition-colors rounded-lg justify-center py-2"
        >
          <EmojiHappyIcon className="h-7  text-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base">
            Feeling/Activity
          </p>
        </div>
      </div>
    </div>
  )
}