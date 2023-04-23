import React from "react";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";
import SmallTitle from "../common/typografy/smallTitle";
import PropTypes from "prop-types";

const ComponentsList = ({ children }) => {
    const arrayOfChildren = React.Children.toArray(children);

    return React.Children.map(arrayOfChildren, (child) =>
        React.cloneElement(child, {
            ...child.props,
            num: +child.key.replace(".", "") + 1
        })
    );
};
const Component = ({ num }) => {
    return <div> {num} Компонент Списка</div>;
};

ComponentsList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
Component.propTypes = {
    num: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <Divider />
            <SmallTitle>Solution</SmallTitle>
            <ComponentsList>
                <Component />
                <Component />
                <Component />
            </ComponentsList>
        </CollapseWrapper>
    );
};

// const Component = () => {
//     return <div>Компонент списка</div>;
// };

export default ChildrenExercise;
