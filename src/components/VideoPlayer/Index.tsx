import { DefaultUi, Player, Youtube } from "@vime/react";
import '@vime/core/themes/default.css'
import { VideoPlayerProps } from "./VideoPlayerProps";

export function VideoPlayer(props: VideoPlayerProps) {
  return (
    <div className="bg-black flex justify-center">
      <div className="w-full h-full max-w-[1100px] max-h-[60vh] aspect-video">
        <Player>
          <Youtube videoId={props.videoId} />
          <DefaultUi />
        </Player>

      </div>
    </div>
  )
}