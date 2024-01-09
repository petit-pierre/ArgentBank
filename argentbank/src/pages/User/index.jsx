import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

function User() {
  const { userId } = useParams();
  console.log(userId);
  const token = useSelector((state) => state.token);
  if (token === null) {
    return <Navigate to="../404/" replace={true} />;
  }
  return (
    <div>
      <p>user</p>
    </div>
  );
}

export default User;
