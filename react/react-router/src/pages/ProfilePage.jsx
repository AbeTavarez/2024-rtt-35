import { useParams } from "react-router-dom";
import { users } from "../assets/users";


export default function ProfilePage() {
  const { id } = useParams();
  console.log('Param ID -> ', id);

  const userData = users.find(user => user.id == id);
  console.log('USER INFO => ', userData);

  if (!userData) return <h1>Profile Not Found!</h1>
  
  
  return (
    <main>
      <h1>Profile Page</h1>
      <h2>{userData.name} | {userData.website}</h2>
    </main>
  );
}
