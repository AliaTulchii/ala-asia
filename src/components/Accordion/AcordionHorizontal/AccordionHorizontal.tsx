import ItemFifth from "./AccordionItems/ItemFifth";
import ItemFirst from "./AccordionItems/ItemFirst";
import ItemFourth from "./AccordionItems/ItemFourth";
import ItemSecond from "./AccordionItems/ItemSecond";
import ItemSix from "./AccordionItems/ItemSix";
import ItemThird from "./AccordionItems/ItemThird";
// import { useAccordionHorizontalItems } from "./AccordionHorizontal.Constant";

const AccordionHorizontal = () => {
  return (
    <div className="accordion-horizontal">      
        <ItemFirst/>
          <ItemSecond />
          <ItemThird />
          <ItemFourth />
          <ItemFifth />
          <ItemSix/>
    </div>
  );
};

export default AccordionHorizontal;
