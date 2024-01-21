
import { useTypedSelector } from '../redux/hooks'

const VideoDetail = () => {

  const selectedVideo = useTypedSelector((state)=>state.video.setChanneldetails)
  
  console.log(selectedVideo)

  return (
    <div>VideoDetail</div>
  )
}

export default VideoDetail