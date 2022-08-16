import { NextApiRequest, NextApiResponse } from "next"

type Story = {
  storyImage: string
  storyUrl: string
  author: {
    name: string
    imageUrl: string
  }
}

interface Response {
  stories: Story[]
}

const StoriesHandler = (_req: NextApiRequest, res: NextApiResponse<Response>) => {
  const stories = [
    {
      storyImage: 'https://images.unsplash.com/photo-1659273144626-63cb708617fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      storyUrl: '1234567890',
      author: {
        name: 'Li a Bella',
        imageUrl: 'https://images.unsplash.com/photo-1571914001156-dca4c3a20844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
      },
    },
    {
      storyImage: 'https://images.unsplash.com/photo-1593814681464-eef5af2b0628?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      storyUrl: '2345678901',
      author: {
        name: 'Starcity',
        imageUrl: 'https://images.unsplash.com/photo-1542665174-31db64d7e0e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3RhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
      },
    },
    {
      storyImage: 'https://images.unsplash.com/photo-1659105619295-ce2e0bd0737f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
      storyUrl: '3456789012',
      author: {
        name: 'John Doe',
        imageUrl: 'https://images.unsplash.com/photo-1659397786436-7a19e98128f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80'
      },
    },
    {
      storyImage: 'https://images.unsplash.com/photo-1659469705285-1dadcbc14fb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      storyUrl: '4567890123',
      author: {
        name: 'Lila',
        imageUrl: 'https://cdna.artstation.com/p/assets/images/images/040/187/500/large/mel-milton-portrait25.jpg'
      },
    },
  ]

  res.status(200).json({ stories })
}

export default StoriesHandler