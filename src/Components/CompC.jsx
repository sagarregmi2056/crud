import { useContext } from "react";
import { namedcontext } from "../App";

const CompC = () => {
  const meropaisa = useContext(namedcontext);

  return (
    <>
      <h1>{meropaisa} mailya paya</h1>
    </>
  );
};

export default CompC;
