key - is a non-renderable prop and is used by the Virtual DOM
to distinguish between one JSX
element with another in an iterator

in operator - ES5 - iterator

Search Parameters/Query parameters

- are often found in the route / BrowserURL

  http://www.example.com/?type=sometype&when=recent

  type=sometype // {type:'sometype',when:'recent'}  
   when=recent

  //************\*\*\*\*************\_\_\_************\*\*\*\*************
  import {useSearchParams} from 'react-router-dom';

  export function someComponent(){

  const [searchParams,setSearchParams] = useSearchParams(); // {type:'sometype',when:'recent'}

// Gathering search parameters shared object
console.log(searchParams.get('type')); // 'sometype'
console.log(searchParams.get('when')); // 'recent'

// Setting search parameters shared object - mutation
setSearchParams.set({when:'past'})

        return <div> placeholder </div>
     }
