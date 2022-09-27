import './background.css';

const Background = ()=> {
  return (
    <div className='background'>
        <div className="container">
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatum ea expedita totam?</h1>
            <button id='btn' onClick={()=>{
                var btn = document.getElementById("btn");
                btn.style.display = "none";
            }}>Click</button>
        </div>
    </div>
  );
}


export default Background;
