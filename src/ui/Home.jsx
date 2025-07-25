import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const userName = useSelector((state) => state.user.userName);
  return (
    <div className="text-center my-10 sm:my-16">
      <h1 className="mb-8 md:text-3xl  text-xl font-semibold px-4 sm:px-0">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven straight to you.
        </span>
      </h1>
      {!userName ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/menu">
          Continue Ordering {userName}
        </Button>
      )}
    </div>
  );
}

export default Home;
