import { useState } from 'react'
import './App.css'
import Tabs from './components/Tabs'
import Content from './components/Content'

function App() {
  const tabArray = [
    { label: "Tab 1", content: "This is where Tab 1 content will display." },
    { label: "Tab 2", content: "This is where Tab 2 content will display." },
    { label: "Tab 3", content: "This is where Tab 3 content will display." },
  ]

  const [ allTabs, setAllTabs ] = useState(tabArray)

  const [ thisTab, setThisTab ] = useState(0)

  return (
    <div>
      <Tabs 
        allTabs={ allTabs } 
        thisTab={ thisTab }
        setThisTab={ setThisTab } 
      />
      <Content allTabs={ allTabs } thisTab={ thisTab } />
    </div>
  )
}

export default App
