import { FeedEntryForm } from "./FeedEntryForm"
import { Posts } from "./Posts"
import { Stories } from "./Stories"

export const Feed = () => {
  return (
    <div className="grow h-screen overflow-y-auto scrollbar-hide pt-4 pb-20">
      <Stories />
      <FeedEntryForm />
      <Posts />
    </div>
  )
}