import { NextApiRequest, NextApiResponse } from "next";
import probe from 'probe-image-size'

const FindImageSize = async (req: NextApiRequest, res: NextApiResponse) => {
  const { imageUrl } = req.body

  if (!imageUrl) res.status(400).json({ error: 'No image to extract data from'})
  
  const result = await probe(imageUrl)

  if (!result) res.status(400).json({ error: 'Could not extract image data'})

  const imageDimensions = {
    width: result.width,
    height: result.height,
  }

  res.status(200).json({ imageDimensions })
}

export default FindImageSize
