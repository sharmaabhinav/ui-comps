import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import PlaceHolder from './PlaceHolder/PlaceHolder';

const RealComponent = () => <h2 className={styles.container}>This is a real component</h2>

function App() {
  const [loading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 10000)
  }, [])
  return (
    <div className={styles.app}>
      <h1>
        Usage : media
      </h1>
      <PlaceHolder loading={loading} type='media'>
        <RealComponent />
      </PlaceHolder>
      <h1>
        Usage : media with half screen
      </h1>
      <PlaceHolder loading={loading} type='media' style={{width: '50%'}}>
        <RealComponent />
      </PlaceHolder>
      <h1>
        Usage : text with 6 rows
      </h1>
      <PlaceHolder loading={loading} type='text' rows={6}>
        <RealComponent />
      </PlaceHolder>
      <h1>
        Usage : round
      </h1>
      <PlaceHolder loading={loading} type='round'>
        <RealComponent />
      </PlaceHolder>
      <h1>
        Usage : rect
      </h1>
      <PlaceHolder loading={loading} type='rect'>
        <RealComponent />
      </PlaceHolder>
      <h1>
        Usage : default
      </h1>
      <PlaceHolder loading={loading}>
        <RealComponent />
      </PlaceHolder>
      <h1>
        Usage : custom placeholder
      </h1>
      <PlaceHolder loading={loading} customPlaceholder={
        <>
          <div className={styles.customPlaceholder}>
            <PlaceHolder.Rectangle style={{width: '500px'}}/>
            <PlaceHolder.Round />
            <PlaceHolder.Rectangle />
          </div>
          <PlaceHolder.Text />
          <PlaceHolder.Text rows={1} style={{width: '30%'}} />
        </>
      }>
        <RealComponent />
      </PlaceHolder>
    </div>
  );
}

export default App;
