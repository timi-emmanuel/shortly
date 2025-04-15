import ConstrucImage from '../assets/underconstruction.jpeg';

const Features = () => {
return (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
    <img src={ConstrucImage} alt="Under Construction" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
     <p>This page is currently under construction. Please check back later!</p>
  </div>
);
}
 
export default Features;