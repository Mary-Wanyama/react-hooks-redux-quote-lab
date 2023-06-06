// Action Creators
// TODO: Create action creators as defined in tests

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch action.type{
    case "add/quote":
      return{
        ...state
        quotes: [...state.quotes, action.payload
      }
    case "remove/quote":
      const newList = state.quotes.filter(quotes=>quotes.id !== action.payload)
      return{
        ...state
        quotes: newList
      }
      case "add/votes"
      count = state.quotes.find(quote=> quote.id === quote.id)
      return{
  
       count++
  }
    default:
  return state;
}
