import VideoPlayer from '../components/VideoPlayer';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <VideoPlayer src="https://www.w3schools.com/html/mov_bbb.mp4" poster="https://via.placeholder.com/360x640.png?text=Cover+Image+1" />
        <VideoPlayer src="https://www.w3schools.com/html/mov_bbb.mp4" poster="https://via.placeholder.com/360x640.png?text=Cover+Image+2" />
        <VideoPlayer src="https://www.w3schools.com/html/mov_bbb.mp4" poster="https://via.placeholder.com/360x640.png?text=Cover+Image+3" />
        <VideoPlayer src="https://www.w3schools.com/html/mov_bbb.mp4" poster="https://via.placeholder.com/360x640.png?text=Cover+Image+4" />
      </div>
    </div>
  );
}
