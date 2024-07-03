/* eslint-disable no-unused-vars */

// eslint-disable-next-line react/prop-types
const ChildComponent = ({onChildData}) => {

    const myData = "ali ahasan nabin"
  
     onChildData(myData)
   

    return (
        <div>
            <p>I am child Component</p>
        </div>
    );
};

export default ChildComponent;