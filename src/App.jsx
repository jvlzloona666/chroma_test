import './App.css'
import Header from './Header.jsx'
import hero from './assets/frontChroma_copy.png'
function App() {
const styles = {
  content:{
    margin: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: '10vh',
    fontFamily: 'Manrope',
  },
  heroText: {
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    fontSize: '20px',
    justifyContent: 'space-evenly',
    alignItems: 'center',

  } 
}

  return (
    <>
      <Header />
      <div style={styles.content}>
        <img src={hero} style={{width: '60%'}}/>
        <div>
        <div style={styles.heroText}>
        <p className='w-1/2'>We provide you with the tools you need to develop your edge,
           become consistently profitable, and achieve your trading goals. </p>
          <div className="relative inline-flex group ">
            <div
                className="animate-pulse absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#1868ff] via-[#B800fc] to-[#ff8769] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
            </div>
            <a href="primary" title="Get quote now"
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-black font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button">Join Us &gt;
            </a>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
