import React, { useEffect, useState } from 'react';
import Card from '../../components/card/card';
import Styles from './home.module.css';
import Input from '../../components/input/input';

function Home() {
  const [data, setData] = useState({ initialData: [], currentData: [] });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  //Gets all the data from the getAll API
  async function getData() {
    setIsLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/projects/get-all`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        },
      );
      const response = await res.json();
      if (res.status === 200) {
        setData({ currentData: response, initialData: response });
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  async function getKeywords(input) {
    setIsLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/projects/get-keywords`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify({ searchQuery: input }),
        },
      );
      const response = await res.json();
      if (res.status === 201) {
        searchKeywords(response.keywords);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function searchKeywords(filters) {
    //Converting filters to lowercase to make the search case-independent
    const lowercaseFilters = filters.map((filter) => filter.toLowerCase());

    //Storing technical stack skills in an array
    const filteredProjects = data.initialData.filter((project) => {
      const techSkills = [
        project.technicalSkillSetBackend,
        project.technicalSkillSetFrontend,
        project.technicalSkillSetDatabases,
        project.technicalSkillSetInfrastructure,
      ];

      /**
       * Checking if any of the tech stack contains the input filters
       * This also converts each skill in tech stack to lower case
       */
      return techSkills.some((skill) => {
        return (
          skill &&
          lowercaseFilters.some((filter) =>
            skill.toLowerCase().includes(filter),
          )
        );
      });
    });
    setData({ ...data, currentData: filteredProjects });
  }

  function handleData(){
    setData({ ...data, currentData: data.initialData });
  }

  return (
    <div id={Styles.home}>
      <div id={Styles.inputBar}>
        <Input getKeywords={getKeywords} handleData={handleData} />
      </div>
      <div id={Styles.cardArea}>
        {isLoading
          ? 'Fetching data....'
          : data.currentData.length > 0
          ? data.currentData.map((item, index) => (
              <Card key={index} individualData={item} />
            ))
          : 'No Results Found'}
      </div>
    </div>
  );
}

export default Home;
