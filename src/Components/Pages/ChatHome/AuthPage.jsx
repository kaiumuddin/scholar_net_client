import axios from "axios";
import "./ChatPage.css";
import { Button, TextInput } from "flowbite-react";

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post(" https://scholar-net-subrota.vercel.app/authenticate", { username: value })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log("Auth Error", e));
  };

  return (
    <div className="background">

      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <TextInput
            className="auth-input" name="username"
            placeholder="Enter username like subrotachandra"
            required={true}
          />

          <Button type="submit" className="w-96 my-2">
            Enter
          </Button>
        </div>
      </form>


    </div>
  );
};

export default AuthPage;