import uuid from "react-uuid";

export const getItems = (props) => {
  const { textAttribute = "", isAllFilter, isActiveFilter } = props;
  return filteredItems(
    getExistingItems(),
    textAttribute,
    isAllFilter,
    isActiveFilter
  );
};

export const getExistingItems = () => {
  return JSON.parse(localStorage.getItem("todos"));
};

export const applyFilter = (items, isAllFilter, isActiveFilter) => {
  if (isAllFilter) {
    return items;
  } else if (isActiveFilter) {
    return items.filter((item) => item.isActive === true);
  } else {
    return items.filter((item) => item.isActive === false);
  }
};

export const filteredItems = (
  items,
  textAttribute,
  isAllFilter,
  isActiveFilter
) => {
  if (items === null) {
    return [];
  }

  items = items.filter((item) =>
    item.task.toLowerCase().includes(textAttribute.toLowerCase())
  );

  return applyFilter(items, isAllFilter, isActiveFilter);
};

export const addItems = (task) => {
  const item = {
    id: uuid(),
    task: task,
    isActive: true,
  };
  let items = getExistingItems();

  items = items ? items : [];
  items.push(item);
  setItems(items);
};

export const setItems = (items) => {
  localStorage.setItem("todos", JSON.stringify(items));
};
