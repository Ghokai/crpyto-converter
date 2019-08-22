**1. How long did you spend on the coding assignment? What would you add to your solution if you had
more time? If you didn't spend much time on the coding assignment then use this as an opportunity to
explain what you would add.**

- I spent 2 hours for webpack configuration and build system, 4 hours developing frontend and backend application also 1.5 hours adding test senarios.
- If I had more time i will consider to develop application with Typescript, also i would add real time data update with socket.io, and i would split backend and front applications and run in containers. 

**2. What was the most useful feature that was added to the latest version of your language of choice
Please include a snippet of code that shows how you've used it.**

- Definitely react hooks. One of my favourite features of react. It enables to using state and life cycle methods on functional components. Also i used "useReducer" react-hook with context api in this application. (See AppWrapper component)

```
//simplest react hooks sample
import React, { useState } from 'react';

function Example() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

**3. How would you track down a performance issue in production? Have you ever had to do this?**

- I would investigate component load times with chrome developer tools. If some components are too big size i would consider to load them lazy.
- Also i search about if any component making unnecessary rendering operation. If so i would improve them also i could use memoization if possible.
- I would serve static contents via CDN
- I would consider to use server side rendering for initial fast loading of page.
- I would make sure of running app with production mode with minimized, uglified, code splitted and tree shaked.
- Also i would consider backend api response times. Might be some improvement should be made for backend.

**4. What was the latest technical book you have read or tech conference you have been to? What did you
learn?**

- very good resource for typescript also open source :) you can check via [https://github.com/basarat/typescript-book](https://github.com/basarat/typescript-book) It is very good reference for understand typescript deeply.

**5. What do you think about this technical assessment?**

- i think simple and effective assignment for measuring skills. At the first i think i can solve it with only react application. But i faced with cors issue from coin market cap api, and i realize it happens because coinmarketcap force me to use backend for securing api key. So i decided to make full stack express+react app for this assesment.

**6. Please, describe yourself using JSON.**

    {
        "passion": "learning",
        "belief": "science",
        "motto": "i never failed, i either win or learn",
        "personality": ["optimistic", "joyful", "sarcastic"],
        "hobbies": ["sport", "cinema", "hiking"],
        "favouriteMovies": ["the man from earth", "2001: a space odyssey", "mr. nobody", "matrix"]
    }
