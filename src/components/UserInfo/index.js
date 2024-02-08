import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import "./index.css";

const Index = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [name, setName] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [sort, setSort] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await axios.get(
      "http://jsonplaceholder.typicode.com/users"
    );
    console.log(response.data);
    setData(response.data);
  };

  const searchResult = (e) => {
    e.preventDefault();
    console.log(name);
    const filter = data.filter((element) =>
      element.name.toLowerCase().includes(name.toLowerCase())
    );
    console.log(filter);
    setSearch(filter);
    const existingSearchHistory =
      JSON.parse(localStorage.getItem("searchHistory")) || [];
    existingSearchHistory.push(name);
    console.log(existingSearchHistory);
    localStorage.setItem(
      "searchHistory",
      JSON.stringify(existingSearchHistory)
    );
  };

  const resetPage = (e) => {
    e.preventDefault();
    setSearch([]);
    setShowHistory(false);
  };

  const sortResult = (e) => {
    e.preventDefault();
    console.log("Users are sorting");
    if (search.length === 0) {
      data.sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );
      console.log(data);
      setData([...data]);
    } else {
      search.sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );
      console.log(data);
      setSearch([...search]);
    }

    setSort(!sort);
    if (sort) fetchData();
  };

  const historyResult = (e) => {
    if (showHistory) {
      e.preventDefault();
      let his = JSON.parse(localStorage.getItem("searchHistory"));
      console.log(his);
      const result = data.filter((element) =>
        element.name.toLowerCase().includes(...his)
      );
      console.log(result);
      setHistory(result);
    }
    setShowHistory(!showHistory);
  };
  return (
    <div class="user-container">
      <input
        type="text"
        placeholder="Enter user name"
        onChange={(e) => setName(e.target.value)}
        class="input-search"
      />
      <input
        type="submit"
        value="SEARCH"
        onClick={(e) => searchResult(e)}
        class="search-button"
      />
      <div>
        <input
          type="submit"
          value="Reset"
          onClick={(e) => resetPage(e)}
          class="reset-button button"
        />
        <input
          type="submit"
          value="Sort"
          onClick={(e) => sortResult(e)}
          class="sort-button button"
        />
        <input
          type="submit"
          value="History"
          onClick={(e) => historyResult(e)}
          class="history-button button"
        />
      </div>
      <div>
        <ol>
          {showHistory
            ? history.map((element) => (
                <li key={element.id}>
                  <Card element={element} />
                </li>
              ))
            : search.length === 0
            ? data.map((element) => (
                <li key={element.id}>
                  <Card element={element} />
                </li>
              ))
            : search.map((element) => (
                <li key={element.id}>
                  <Card element={element} />
                </li>
              ))}
        </ol>
      </div>
    </div>
  );
};

export default Index;
