import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [modifedList, setModifedList] = useState([]);
  const addItemToList = () => {
    setList([...list, item]);
    setItem("");
  };
  const [searchItem, setSearchItem] = useState("");

  const [editingItemIndex, setEditingItemIndex] =
    useState(null);
  const [editingItemDetails, setEditingItemDetails] =
    useState("");

  const onDeleteItem = (val, idx) => {
    const filteredList = list.filter(
      (listItem, index) => idx != index
    );
    setList(filteredList);
  };

  const onEditItem = () => {
    let newList = [...list];
    newList[editingItemIndex] = editingItemDetails;
    setList(newList);
    setEditingItemIndex(null);
    setEditingItemDetails("");
  };
  const handelSearch = () => {
    const filteredList = list.filter((item, idx) =>
      item.includes(searchItem)
    );
    setModifedList(filteredList);
  };

  useEffect(() => {
    handelSearch();
  }, [searchItem]);

  const finalList =
    modifedList.length > 0 ? modifedList : list;

  return (
    <>
      <div>
        <input
          onChange={(e) => setSearchItem(e.target.value)}
          type="text"
          className="shadow rounded-lg overflow-hidden mb-8 outline-none py-1 px-3 "
        />
        <button
          className="ml-2"
          onClick={() => handelSearch()}
        >
          Search
        </button>
        {searchItem.length > 0 && (
          <button
            className="ml-2"
            onClick={() => setModifedList([])}
          >
            Clear
          </button>
        )}
      </div>
      <div className="flex  shadow rounded-lg overflow-hidden mb-4 ">
        <input
          onChange={(e) => setItem(e.target.value)}
          value={item}
          type="text"
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              addItemToList();
            }
          }}
          className="outline-none w-full py-1 px-3 bg-white"
        />
        <button
          className=""
          onClick={() => addItemToList()}
        >
          Add
        </button>
      </div>
      <div>
        <p className="mb-2">
          Items in finalList: {finalList.length}
        </p>
        {finalList.map((val, idx) => {
          if (idx == editingItemIndex) {
            return (
              <div
                key={idx}
                className="flex items-center justify-between p-2 border rounded-lg shadow-sm mb-2"
              >
                <input
                  className=" border rounded-lg shadow-sm p-2"
                  value={editingItemDetails}
                  onChange={(e) =>
                    setEditingItemDetails(e.target.value)
                  }
                />
                <div className="space-x-2">
                  <button
                    className="px-2 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
                    onClick={() => onEditItem()}
                  >
                    Save
                  </button>
                  <button
                    className="px-2 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                    onClick={() => {
                      setEditingItemIndex(null);
                      setEditingItemDetails("");
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={idx}
                className="flex items-center justify-between p-2 border rounded-lg shadow-sm mb-2"
              >
                <p className="text-gray-800">{val}</p>
                <div className="space-x-2">
                  <button
                    className="px-2 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
                    onClick={() => {
                      setEditingItemIndex(idx);
                      setEditingItemDetails(val);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="px-2 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                    onClick={() => onDeleteItem(val, idx)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default App;
