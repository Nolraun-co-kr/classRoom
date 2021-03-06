import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import SurveyItem from './SurveyItem';
const style = {
  marginBottom: '.5rem',
  cursor: 'move'
};
// eslint-disable-next-line react/display-name
const Item = forwardRef(({
  text, isDragging, connectDragSource, connectDropTarget,
  item,
  handleClickToggleSurveyItem,
  handleClickRemoveSurveyItem
}, ref) => {
  const elementRef = useRef(null);
  connectDragSource(elementRef);
  connectDropTarget(elementRef);
  const opacity = isDragging ? 0 : 1;
  useImperativeHandle(ref, () => ({
    getNode: () => elementRef.current
  }));
  console.log(item);
  return (<div ref={elementRef} style={{ ...style, opacity }}>
     <SurveyItem
      item={item}
      handleClickToggleSurveyItem={handleClickToggleSurveyItem}
      handleClickRemoveSurveyItem={handleClickRemoveSurveyItem}
     />
  </div>);
});

export default DropTarget('Survey', {
  hover (props, monitor, component) {
    if (!component) {
      return null;
    }
    // node = HTML Div element from imperative API
    const node = component.getNode();
    if (!node) {
      return null;
    }
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }
    // Determine rectangle on screen
    const hoverBoundingRect = node.getBoundingClientRect();
    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    // Determine mouse position
    const clientOffset = monitor.getClientOffset();
    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;
    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%
    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }
    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }
    // Time to actually perform the action
    props.moveSurvey(dragIndex, hoverIndex);
    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
}, (connect) => ({
  connectDropTarget: connect.dropTarget()
}))(DragSource('Survey', {
  beginDrag: (props) => ({
    id: props.id,
    index: props.index
  })
}, (connect, monitor, props) => {
  return ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    item: props.item,
    handleClickToggleSurveyItem: props.handleClickToggleSurveyItem,
    handleClickRemoveSurveyItem: props.handleClickRemoveSurveyItem
  });
})(Item));
