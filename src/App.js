import './App.css';
import React from 'react';
import Friend from './Components/Friend.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = this.setInitialState();
    this.state.original = this.state.friends;
  }
  setInitialState = ()=>{
    return {friends:[{
      "Name": "Rahul Gupta",
      "Favourite": false
    },
    {
      "Name": "Shivangi Sharma",
      "Favourite": false
    },
    {
      "Name": "Akash Singh",
      "Favourite": false
    }
  ],
  searchValue:''
}
 
  }
  sortFavFriends=()=>{
    let friends = this.state.friends;
    friends.sort((a,b)=> {
      let keyA = a.Favourite ? 1: 0,
      keyB = b.Favourite ? 1: 0;
      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
      return 0;
    });
    return friends;
  }
  handleFavClick= name =>{
    const friendsList = this.state.friends.map(obj => ({...obj}));
    const index = friendsList.findIndex(e =>e.Name === name);
    if(index>=0){
      friendsList[index].Favourite = !friendsList[index].Favourite;
      this.setState({...this.state.friends,friends:friendsList,original:friendsList});
    }
  }
  searchFriend =event=> {
    this.setState({searchValue: event.target.value});
  }

  handleKeyDown = event=>{
    if (event.key === 'Enter' && event.target.value.length>0 ) {
        const friendsList = this.state.original.map(obj => ({...obj}));
        friendsList.push({
          "Name": event.target.value,
          "Favourite": false
        })
        this.setState({
          ...this.state,
          friends:friendsList,
          original:friendsList,
          searchValue:''
        });
    }
  }

  componentDidUpdate(prevProps, prevState){
    const friendsCount = this.state.friends.length;
    if(prevState.searchValue!==this.state.searchValue){
      let filteredFriends = this.state.original.filter(elem =>elem.Name.toLowerCase().includes(this.state.searchValue.toLowerCase()));
      this.setState({...this.state.friends,friends:filteredFriends})
      return
    }
    if(prevState.friends.length === this.state.friends.length){
      for (let i = 0; i < friendsCount; i++) {
          if(prevState.friends[i].Favourite !==this.state.friends[i].Favourite){
            const sortedFriends = this.sortFavFriends();
            this.setState({...this.state.friends,friends:sortedFriends});
            return;
          }
      }
    }
  }
  render(){
    const friendsList = this.state.friends.map((details,i)=> 
      <Friend 
        details={details} 
        key={details.Name} 
        handleFavClick={this.handleFavClick}
      />
  );
  return (
    <div className="App">
      <header className="App-header">   
      <h2>Friends</h2>
      <input value={this.state.searchValue} onChange={this.searchFriend} onKeyDown={this.handleKeyDown}/>
      <div className="wrapper">
        {friendsList}
      </div>
      </header>
    </div>
  );
  }
}

export default App;
