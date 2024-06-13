import './App.css'

function Header() {

const styles = {
    header:{
        display: 'flex',
        justifyContent: 'space-around', 
        alignItems: 'center',
        color: 'white',
        backgroundColor: 'black',
        margin: '0',
        padding: '20px',
        fontFamily: 'Manrope',
        letterSpacing: '20px',
    },
    links: {
        letterSpacing: '0px',
        display: 'flex',
        flexDirection: 'row',
        gap: '24px',
        justifyContent: 'space-between',
    }
}

return (
    <>
        <div style={styles.header}>
            <h1>CHROMA</h1>
            <div style={styles.links}>
                <a href=''>About</a>
                <a href=''>Team</a>
                <a href=''>Pricing</a>
            </div>
        </div>



    </>
  )
}

export default Header
