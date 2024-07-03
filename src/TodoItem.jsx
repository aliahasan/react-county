/* eslint-disable react/prop-types */

const TodoItem = ({todo}) => {
    return (
        <div>
        <li>{todo?.title}</li>
        </div>
    );
};

export default TodoItem;