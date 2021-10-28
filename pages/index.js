import React,{ useState, useEffect } from "react";
import { gql, useQuery } from '@apollo/client';
import styles from './index.module.scss';
import Result from "../components/result";
import RepositoryCount from "../components/repositoryCount";

const QUERY = gql`
        query SearchRepo($queryString: String!) {
            search(query: $queryString, type: REPOSITORY, first:99) {
                repositoryCount,
                    edges {
                    node {
                    ...on Repository{
                            name,
                                owner {
                                id,
                                login,
                                avatarUrl
                            },
                        }
                    }
                }
            }
        }
`;

const Home = () => {
  const cardPerPage = 10;
  const [ searchQuery, setSearchQuery ] = useState('');
  const [ validSearchQuery, setValidSearchQuery ] = useState('');
  const [ visibleCards, setVisibleCards ] = useState(cardPerPage);

  useEffect(() => {
    const io = new IntersectionObserver( entries => {
      for (const entry of entries) {
        if(entry.isIntersecting) {
          setVisibleCards(visibleCards + cardPerPage);
        }
      }
    });
    document.querySelectorAll('#pagebottom').forEach(elem => io.observe(elem))
  });

  const result = useQuery(
      QUERY,
      {variables: {queryString: validSearchQuery}}
  );

  const handleChange = (event) => {
    event.preventDefault();
    const updInputValue = event.target.value;
    setSearchQuery(updInputValue);
    if(updInputValue.length > 2) {
      setValidSearchQuery(updInputValue)
    }
  };
  return (
      <div className={styles.repositoryList}>
        <input type="text" value={searchQuery} onChange={handleChange}/>
        <RepositoryCount amout={result?.data?.search?.repositoryCount} />
        <Result cards={result?.data?.search?.edges?.slice(0, visibleCards)} />
        { !!result?.data?.search?.repositoryCount && <div id="pagebottom"/> }
      </div>
  );
};

export default Home;

