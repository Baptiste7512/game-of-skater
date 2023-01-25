import './css/Wrapper.css';

const Wrapper = ({children}, isShown) => {
  return (
    <div className="wrapper">
            {children}
    </div>
  );
}

export default Wrapper;
