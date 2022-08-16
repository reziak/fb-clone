import { collection, orderBy, query } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { firebaseDB } from '../../firebase'
import { PostType, Post } from "./Post"

export const Posts = () => {
  const [posts, _loading, _error] = useCollection(
    query(
      collection(firebaseDB, 'posts'),
      orderBy('timestamp', 'desc')
    ),
    {
      snapshotListenOptions: {
        includeMetadataChanges: true
      }
    }
  )

  return (
    <div className="mx-auto max-w-[403px] md:max-w-[540px] lg:max-w-[677px] pb-10">
      {posts && posts.docs.map((doc) => (
        <Post key={doc.id} post={doc.data() as PostType} />
      ))}
    </div>
  )
}