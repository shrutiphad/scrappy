import Notification from "./@notification/page";
import Revenue from "./@revenue/page";
import Users from "./@users/page";

export default function Home() {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <Users/>
      <Notification/>
      <Revenue/>
    </div>
  );
}
