import { useNavigate } from "react-router-dom";
import MyButton from "../components/UI/button/Button";
import PageAnimation from "../hoc/PageAnimation";

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <PageAnimation>
      <div className="container">
        <div style={{display: "flex", flexDirection: "column", textAlign: "center", gap: "20px"}}>
          <h2>Page not found</h2>
          <MyButton onClick={() => navigate("/", {replace: "true"})} >Go main page</MyButton>
        </div>
      </div>
    </PageAnimation>
  );
}