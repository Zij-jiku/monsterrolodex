import {useState , useEffect} from 'react';

import SearchField from './components/search/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';

  const App = () => {
    const [searchField, setSearchField] = useState('');
    const [title, setTitleChange] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [filterMonsters , setFilterMonsters] = useState([monsters]);

    console.log('render');

    useEffect(() => {
      console.log('useEffect fire');
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => setMonsters(users));
    },[]);

    useEffect(() => {
      const newFilterMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField)
      });

      setFilterMonsters(newFilterMonsters);

    } , [monsters , searchField]);

    

    const onSearchChange =(event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
    };

    const onTitleChange =(event) => {
      const searchFieldString = event.target.value.toLocaleUpperCase();
      setTitleChange(searchFieldString);
    };

   

    return (
      <div className="App">

        <h1 className='app-title'>
          {title}
        </h1>
      
        <SearchField 
        className = 'monster-search-box'
        onChangeHandler = {onSearchChange}
        placeholder = 'Search Monsters'
        />

        <SearchField 
          className = 'title-search-box'
          onChangeHandler = {onTitleChange}
          placeholder = 'Title Monsters'
        />


        <CardList monsters = {filterMonsters} />
    </div>
    )
}

// class App extends Component{
//   constructor() {
//     super();

//     this.state = {
//      monsters: [],
//      searchField: [],
//     }
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//      .then(response => response.json())
//      .then((users) => this.setState( () => {
//        return {monsters: users}
//      } , () => {
//        console.log(this.state)
//      }))
//   }

//   onChangeFn =  (event) => {
//     const searchField = event.target.value.toLocaleLowerCase(); 
//     this.setState(() => {
//       return {searchField }
//     })
//   }

//   render() {
//     console.log('render');

//     const {monsters, searchField} = this.state;
//     const {onChangeFn} = this;


//     const filterMonster = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     });


//     return (
//     <div className="App">

//         <h1 className='app-title'>
//           Monsters Rolodex
//         </h1>
      
//         <SearchField 
//         className = 'monster-search-box'
//         onChangeHandler = {onChangeFn}
//         placeholder = 'Search Monsters'
//         />
//         <CardList monsters = {filterMonster} />
//     </div>
//   );
//   }
// }

export default App;
