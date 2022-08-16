import { NextApiRequest, NextApiResponse } from "next";

type Contact = {
  src: string
  name: string
}

interface Response {
  contacts: Contact[]
}

const Contacts = (_req: NextApiRequest, res: NextApiResponse<Response>) => {
  const contacts = [
    { 
      id: '1234567890',
      src: "https://images.unsplash.com/photo-1571914001156-dca4c3a20844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "Li a Bella",
    },
    {
      id: '2345678901',
      src: "https://images.unsplash.com/photo-1659397786436-7a19e98128f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80",
      name: "John Doe",
    },
    {
      id: '3456789012',
      src: "https://cdna.artstation.com/p/assets/images/images/040/187/500/large/mel-milton-portrait25.jpg",
      name: "Lila",
    },
    {
      id: '4567890123',
      src: "https://images.unsplash.com/photo-1659273145320-4a9750783c25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Marcel Strauss",
    },
    {
      id: '5678901234',
      src: "https://images.unsplash.com/photo-1502323703385-c3ea9ace787d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Brooke Cagle",
    },
    {
      id: '6789012345',
      src: "https://images.unsplash.com/photo-1658958698611-fd4f7ea1081b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Mahdi Bafande",
    }
  ]

  res.status(200).json({ contacts })
}

export default Contacts
