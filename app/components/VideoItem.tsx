import { IVideoItem } from "../helpers/data";

interface VideoItemProps {
   item: IVideoItem;
}

const VideoItem: React.FC<VideoItemProps> = ({ item }) => {
   return <div className="w-full h-full bg-bg-main rounded-3xl"></div>;
};

export default VideoItem;
