import { useState } from "react";
import Button from "../../ui/Button";
import { useNavigation } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        className="w-72 rounded-md h-10 sm:w-96 sm:h-14 m-auto input mb-8 placeholder:uppercase"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <Button disabled={isSubmitting}>
            {isSubmitting ? "Creating User..." : "Start ordering"}
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
