import uuid from "react-uuid";

export const getItems = (props) => {
  console.log("get item called");
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
  console.log("Fiilter status ");
  console.log(isAllFilter);
  console.log(isActiveFilter);
  if (isAllFilter) {
    return items;
  } else if (isActiveFilter) {
    console.log("Active fil items");
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
  console.log("Filtered items called " + textAttribute);
  if (items === null) {
    return [];
  }

  console.log("Items received " + items);
  items = items.filter((item) =>
    item.task.toLowerCase().includes(textAttribute)
  );

  return applyFilter(items, isAllFilter, isActiveFilter);
};

export const addItems = (task) => {
  const item = {
    id: uuid(),
    task: task,
    isActive: true,
  };
  const items = getExistingItems();
  console.log("Existing items " + items);
  items.push(item);
  setItems(items);
};

export const setItems = (items) => {
  localStorage.setItem("todos", JSON.stringify(items));
};
