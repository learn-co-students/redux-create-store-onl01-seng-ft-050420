//let state;


//Main idea: the createStore function will be able to hold
//a abiltiy to execute a pattern with redux which is call a reducer
//reassign the state and render a change
function createStore(reducer){//1:call a reduver
  let state;
  //anytime we are following the redux pattern put that function into our function that includes
  //our global variable
  function dispatch(action){
    state = reducer(state, action);//2: reassign the state
    render();//3: render a change
  }

  function getState(){
    return state;
  }

  return {
    dispatch,//returns updated HTML
    getState //returns state
  }
}
function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
};

let store = createStore();
//store contains all of our application's state
//get state method is going to return the state so that we can use it elsewhere in our application

store.dispatch({type: '@@INIT'})

//returned javascript object that contains the dispatch method is called the store


function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
  //translation of upper line: using the store variable which is set equal
  //to the store method, call getState which is going to return the state and pull that
  //value out of the state in this case state is {count: 0} which will pull the value of
  //that key out of there
};

dispatch({ type: '@@INIT' })
let button = document.getElementById('button');

button.addEventListener('click', () => {
    store.dispatch({ type: 'INCREASE_COUNT' });
})

//when someone clicks on this button call an anonymous function which will use the store
//variable which is set equal to the function createStore, this createStore
//function will include the dispatch method, the dispatch method
//takes in an argument of an action, in the following case the action is a type key
//with a value of an action afterwords, particularly in this case we want to call the increase_count action which
//is going to run through our case statement because dispatch is going to run the reducer
//anyways and that will allow the state to be updated
