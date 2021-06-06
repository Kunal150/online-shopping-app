import React, { useState } from 'react';
import './Login.css'
import { Link,useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const signIn =e=>{
        e.preventDefault();

        auth
             .signInWithEmailAndPassword(email,password)
             .then(auth => {
                 history.push('/')
             })
             .catch(error => alert(error.message))
    }

    const register =e=>{
        e.preventDefault();

        auth
             .createUserWithEmailAndPassword(email,password)
             .then((auth) => {
                       history.push('/')
             })
             .catch(error =>alert(error.message))
    }


    return (
        <div className='login'>
            <Link to='/'>
            <img 
            className="login__logo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAABTVBMVEX4+Pj+/v7////+XgD8////WAD8/PzzgUX1WAAAAAD69+f1x6T+/vz0aBD//f//WwD8UgAA2DL8ygAA2T2goKBsbGwA0y8A0yj2ywDt7e1hYWH7//wA3jX90AT81AH3cAP37bL48sUx1176+NsA0xl/4pivr6/h4eFKSkp1dXU2NjZTU1NGRkbtiFD0ZADChAmMpRprtSOZnRPdcQTNewU2yChVvyaBqRW5iA6rjRmrkBBhtyS8gxDebAPTdwbnawBEwiGfmxPVowWJ1Rihtgv5fgX2kgXo0AD2nwf6qQV1rRv3mgb/RQAkyibRjwTivAr3tQXyejjy0LHQ8tuj6LaM5aS07MQI0Uza9egO1EW/7c5C1Ges6L312Ff044za9uRs34v01DT27qP13myQ5Kde3X4p0mL34oP33mb310r28ssgICCHh4fKysqWlpajLkkpAAAHTUlEQVR4nO2d+1caRxSAmWF2C3S67EMWZAFRBJ8laowxjyZNW41pYmuLD0RRwCfx8f//2DuLNsbHybph4Zzd+4nuLAucM9+5d+bOHHVDIQRBEARBEARBEARBEARBEARBEARBEARBfIYsy+Q7gY/ody96yncL+0pev3vTG7rqLCjmPJAWAHHeSBP0u2de4p01H3vzKEGv8WmiemzNp948t+ZPb95b8+P41gtr/vPWgxQV+C1Ne2PNb+HWo2DzW7j1ypq/wq1nweavcOudNV+FG+2dNdrvvnaPHuaon7IUtbmil9Z8NLihNlegNlegNlegNlegNjf0tP7wTwWC2lyB2lyB2lzhVBtHbTdxrK073gKmzbIYY9x+MM4t0bC4JT/aZbC0sZ/LP91D7NF7dQHT9oMUF0gqIMXVzlkEtX1TWzgcliJPZmZn555Kc0/jcIraHGmT5p9lzIWFpPZcm1FRm0Nt0hPNXIyranlOy7yQUJszbfHyamZeDcOQpj5HbY61SS8zsyI1IVkXMy9Rm0Nt6qvMayEL4m0+M6fGUZsjbdKq9os9f0IR8kaUIKjNibayqb0VIfZm9dmr2YVnv0awbnOiLb6qiWot/nbmHdQhc3OozZE2daEzf6rS0G+//yF9WhpCbQ60Se8yCzCTRpb1XOp9Nrusr6io7dva4mUz80KNfMh9CC9ofy5nsx8l1PZtbWKVoL1bzq2Un2e02U8fc8uozYk2e036PreqJRfNBXUItTnUFpakv7J/z7wuq4vzUjm3gtqcaQtLy7mP9voAat1lnEkfo81u2KGH2pxrW7nSFi9jtDnVFl/KrXV2QcLqmh5BbQ61RfRsOd7RpqM2p9pElq5FoBlXl3JY7jrWFpY+5NaWypHyCugLozan2sIqrEmz2Zz+MYL7bY/QFpfiQ0tLQxHcpnSi7R/1PlDbN7T9++N9WI+1FjBthN7Lo635XZsw0qVfaQuENk4UUlnf2Djc3HcUTJxz8e1UsU+1KTKpjZgaYJpb1VtC77Um8tf5Lw36VBsh60nN2NraMg3DrIp4o0QRg5it5zr+bgxsViHfag3H7nrjnLK7qn2qjVdNw1xnzKoea9sWqx02diqVnSJRqhs7IzuNGpXBX6e9C/Moi9VTOpDaY3ai8itRInNJoT58x6Y/tSlkQzOMKqGc7480aHUUshVytkFr21oyqWnJBuF009SgqY3WINaaeqpeb+r6CURWrFCAQo5TGosxeORTesuK8SBoI3RHM7YtpZOIsrVrAFvb69a2sb1Za5hGcpNAPBqHm0dJc5/Qlq4fMGrV9Tzba0Lcpdox0UjtpeotPaunUqlCELRxOgKamEJYZfewUVHgVCvCGLWeNI5gMIOzI3oIYx8l7OjY4rSt6y1G5Fg+Rg/AWUqE3Z6dtifi0Gy3Y8HQ1ok2RaRn8pB2tHHa0IxG5zBCjzRth3KZUFnmkJ55SE/OOMmnPjMrpdcJq8OTBYg6cY0FJEnBjFkj3No1De1aGyENA6KN06JhHNMjA9x1JgChrcU6lRuL5U9OQRtlp7peINzWRm/PCT7VRjZHwQrMCfSmNqUoYlA4hdkBJg1znyoKsTg70PW2+IsFIJ9Ktev/a4MstrXdLpn9qQ2CBrJU225sbBigjVS3YDRjCq8kDa1RqWwZZoXsw5SwdbheHKkpZBjG/Xo+3zrNQ36eMquZbTORpAUmC20nscKtcPOrNtk6gnoX6gtDS+5aUGgYyW1YLRRF9ZHUzHXKyaEoP5KjoxvUzkSbuiVmADEZ7Imnmp85KBUFXSCmBIFSK+6MiHK2SqyGTZXAkqtxPHJcrIA1hVYacL1Ys2BMo8OnzWbzIB9jn9vNdmuvfTDcOj09reehhmk1m+29gIxtwtvV4umqehPj03VTYfx6nUUVOzoVxiizJ1M4EhjjZGhQBosJcYnd/mwfayM3/p7vvs0NfvdJ+5x/+Xm9LxKUNenX3NqJdLYzefWi+1/qf21C0mDo5mbuYOiBXd6vufGmYGorRSdoCCSQQQr9pdOl87GQLNNBuATv7DzoICGgE9rwUYPghUbHQvCSsYmgaiPjUxOX6egYPZtIDMARvgaj6fP05Di9iJ5fnp9dRBPpicnpi2iJjqfPpgYux6dK0YHoVGl6ciKRCKq2gVI6kR6IyqGzRAmOY9GLyYvpRGk8cUlLU4mJBDwDOhPnl5eURgfS6VJ0+nyidDE+fjEJb7gMqrYvI1mI3hzVQlff9OLyzjXSOQt13h1Ibd+Pb7U9/D+OPNHW7952DdTmCtTmCtTmCtTmCtTmigcrEC+0+ab+QG0ueWgvyANtPvqf4g8Obh5o88/Q9nCWeqDNRzn6YLh5oK3fPe0qeC8Yd/RKW7/72WXwPlfu6I22fvey+6A1d6A1V+D9Sd2Bd8N1iZfW+t03L/Es4PwbajZ4X3mXyKTLt6ajAZBm09WQC4izK2T5u+XBR/S7FwiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCdJv/AFVO/9XDDWFoAAAAAElFTkSuQmCC" />

            </Link>
        <div className="login__container">
        <h1>Sign-in</h1> 

        <form>
            <h5>E-mail</h5>
            <input type='text' value={email} onChange={e=>setEmail(e.target.value)} />

            <h5>Password</h5>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
              
            <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
        </form>
        <p>
            by signing-in you agree to Groccart's  condition's of use & sale.please see our privacy notice,our cookies notice and our internet ads 
        </p>

        <button onClick={register}className='login__registerButton'>Create Groccarts account</button>
       
        </div>
        </div>
    )
}

export default Login
