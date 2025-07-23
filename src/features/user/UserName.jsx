import { useSelector } from "react-redux";
import { getGreeting } from "../../utils/helpers";
function UserName() {
  const userName = useSelector((state) => state.user.userName);
  if (!userName) return;
  return (
    <div className="text-xs font-semibold md:text-lg">
      {getGreeting()}, {userName}
    </div>
  );
}

export default UserName;
