const fullName = 'Myname Mysurname';
const birthYear = 999;

const height = 199.5;
const weight = 99.1;

const a = 'One';
const b = 2;
const c = false;
const d = null;
const e = undefined;
const f = {a, b, c, d, e}
console.log(f)

function calcBMI(height, weight) {
    return (weight/(height/100)**2).toFixed(2);
}


const root = (
    <div>
        <h1>{fullName}</h1>
        <p>{new Date().getFullYear() - birthYear}</p>
        
        <h1>{"BMI: " + calcBMI(height, weight)}</h1>

        <label htmlFor='username'>Username </label>
        <input id='username' className='username' name='username'/>
        <ol>
            <li>{a}</li>
            <li>{b}</li>
            <li>{c}</li>
            <li>{d}</li>
            <li>{e}</li>
            <li>{f}</li>
        </ol>
    </div>
);

ReactDOM.render(root, document.getElementById('root'));