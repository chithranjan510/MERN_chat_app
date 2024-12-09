import MessageContainer from "../components/home/messageContainer/MessageContainer";
import Sidebar from "../components/home/sidebar/Sidebar";

const HomePage = () => {
  return (
    <div className="h-screen overflow-hidden grid sm:grid-cols-[1fr] md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] text-white">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default HomePage;
