
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
 -Solutiuon: 
    getElementById- It selects only one element by Id. 
    getElementByClassName- It selects all elements by Class Name.
    querySelector- It selects first element that match by Selector.
    querySelectorAll- It selects all elements that math by Selector.
 
 3.  How do you **create and insert a new element into the DOM**?
 Solution:
    Firt of all I create document.createElement("Tag"). Then I add content and then   use appendchild() method.

 4. What is **Event Bubbling** and how does it work?

 Solution-
     Event Bubbling is a sort of DOM Event Progation. It looks like a trees where the branches and the leaves are wided.
 
    It works- setting an Event Handler which is Triggered goes to its chidrend to Parents elevents.

  4.  What is **Event Delegation** in JavaScript? Why is it useful?
  
 Solution-
   
    Event Delegation is highly recommended Event where keep only an Element for   multiple Element.
  
    The reason of being useful: It can handle many elememnt by using onlyh Parents   Element. That's why an user can easily get output in a sort time. No need       new element for work.
   
  5. What is the difference between **preventDefault() and stopPropagation()**       methods?

 Solution-
    preventDefault() -It stops the browser’s default action.
    preventDefault() method : element.addEventListener("click", (e) => {
    e.preventDefault(); 
    });
  
    stopPropagation() - It stops the event bubbling to ancestors.
    stopPropagation() method : document.getElement().addEventListener("click",(e)=> {
    e.stopPropagation(); 
    });