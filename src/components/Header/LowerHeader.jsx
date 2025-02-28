import classes from "./header.module.css";
import { IoMdMenu } from "react-icons/io";


const LowerHeader = () => {
  return (
    <>
      <div className={classes.lower_container}>
        <ul>
          <li>
            <IoMdMenu size={30} />
           
            <p>All</p>
          </li>
          <li>Today's Deals</li>
          <li>Buy Again</li>
          <li>Customer Service</li>
          <li>Registry</li>
          <li>Gift Cards</li>
          <li>Sell</li>
        </ul>
      
      </div>
    </>
  );
};

export default LowerHeader;
